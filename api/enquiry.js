// Vercel serverless function: emails website enquiries to the company through Resend.
// Needs RESEND_API_KEY, ENQUIRY_FROM_EMAIL and ENQUIRY_TO_EMAIL (see .env.example).

const AUDIENCES = ['Student', 'Enterprise', 'College']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s-]{10,15}$/

const str = (v) => (typeof v === 'string' ? v.trim() : '')

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

// Returns [data, error]
function parse(body) {
  const d = {
    name: str(body.name),
    email: str(body.email),
    service: str(body.service),
    audience: str(body.audience),
    message: str(body.message),
  }
  if (d.name.length < 1 || d.name.length > 100) return [null, 'Name must be 1-100 characters.']
  if (!EMAIL_RE.test(d.email) || d.email.length > 200) return [null, 'Please enter a valid email address.']
  if (!d.service || d.service.length > 100) return [null, 'Please select a service.']
  if (!AUDIENCES.includes(d.audience)) return [null, 'Please select Student, Enterprise or College.']
  // organisation/college name and phone only apply to Enterprise and College; ignored for Student
  if (d.audience !== 'Student') {
    d.organisation = str(body.organisation)
    d.phone = str(body.phone)
    if (d.organisation.length < 2 || d.organisation.length > 150) return [null, 'Organisation or college name must be 2-150 characters.']
    if (!PHONE_RE.test(d.phone)) return [null, 'Please enter a valid phone number.']
  }
  if (d.message.length < 10 || d.message.length > 2000) return [null, 'Message must be 10-2000 characters.']
  return [d, null]
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = null
    }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid request.' })

  // honeypot filled in: pretend it worked, send nothing
  if (str(body.website)) return res.status(200).json({ ok: true })

  const [d, error] = parse(body)
  if (error) return res.status(400).json({ error })

  const { RESEND_API_KEY, ENQUIRY_FROM_EMAIL, ENQUIRY_TO_EMAIL } = process.env
  const to = (ENQUIRY_TO_EMAIL || '').split(',').map((s) => s.trim()).filter(Boolean)
  // log the names of missing variables only, never their values
  const missing = [
    !RESEND_API_KEY && 'RESEND_API_KEY',
    !ENQUIRY_FROM_EMAIL && 'ENQUIRY_FROM_EMAIL',
    !to.length && 'ENQUIRY_TO_EMAIL',
  ].filter(Boolean)
  if (missing.length) {
    console.error(`enquiry: not sent, missing environment variable(s): ${missing.join(', ')}`)
    return res.status(500).json({ error: 'Could not send' })
  }

  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST'
  const rows = [
    ['Name', d.name],
    ['Email', d.email],
    ['Service', d.service],
    ['I am a', d.audience],
    ...(d.organisation
      ? [
          [d.audience === 'College' ? 'College name' : 'Organisation name', d.organisation],
          ['Phone', d.phone],
        ]
      : []),
    ['Message', d.message],
    ['Time', time],
  ]
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html =
    '<h2>New website enquiry</h2><table cellpadding="6" style="border-collapse:collapse">' +
    rows
      .map(([k, v]) => `<tr><th align="left" valign="top">${k}</th><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
      .join('') +
    '</table>'

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: ENQUIRY_FROM_EMAIL,
        to,
        reply_to: d.email,
        subject: `New enquiry: ${d.service} - ${d.name}`.replace(/[\r\n]+/g, ' '),
        text,
        html,
      }),
    })
    if (!r.ok) {
      // details stay in the server log; the browser only gets "Could not send"
      console.error(`enquiry: not sent, Resend responded ${r.status}:`, await r.text())
      return res.status(500).json({ error: 'Could not send' })
    }
  } catch (err) {
    console.error('enquiry: request to Resend failed', err)
    return res.status(500).json({ error: 'Could not send' })
  }

  return res.status(200).json({ ok: true })
}
