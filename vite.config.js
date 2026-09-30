import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Dev only: serves the Vercel-style functions in ./api under `npm run dev`, e.g. /api/enquiry ->
// api/enquiry.js. On Vercel these files run as serverless functions and this plugin isn't used.
function apiRoutes() {
  return {
    name: 'dev-api-routes',
    apply: 'serve',
    configureServer(server) {
      // .env / .env.local, all variables (empty prefix), so the functions can read process.env
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''))

      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://localhost')
        if (!url.pathname.startsWith('/api/')) return next()

        // Vercel-style helpers the handlers use
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (obj) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(obj))
          return res
        }
        res.send = (body) => {
          if (body !== null && typeof body === 'object') return res.json(body)
          res.end(body ?? '')
          return res
        }

        // only simple names, so the URL can't point outside ./api
        const name = url.pathname.match(/^\/api\/([a-z0-9-]+)\/?$/)?.[1]
        const file = name && path.resolve('api', name + '.js')
        if (!file || !fs.existsSync(file)) return res.status(404).json({ error: 'Not found' })

        try {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const raw = Buffer.concat(chunks).toString()
          try {
            req.body = raw ? JSON.parse(raw) : undefined
          } catch {
            req.body = raw // invalid JSON: the handler rejects it with 400
          }

          // ssrLoadModule picks up edits to the function without restarting the dev server
          const { default: handler } = await server.ssrLoadModule(`/api/${name}.js`)
          await handler(req, res)
        } catch (err) {
          console.error(`[api/${name}]`, err)
          if (!res.headersSent) res.status(500).json({ error: 'Could not send' })
          else res.end()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), apiRoutes()],
})
