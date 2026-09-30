# Techademy Technology and Training Company – Website (React)

React + Vite version of the static Techademy site. Same design, same content, same behaviour
(course explorer, accordion, enquiry form) — now split into components.

## Run it

    npm install
    npm run dev        # site + /api functions at http://localhost:5173
    npm run build      # production build in /dist
    npm run preview    # serve the production build locally (static only, no /api)

## Local development

`npm run dev` runs the site and the `/api` functions together, so the Contact page enquiry form
works locally. A small dev-only plugin in `vite.config.js` routes `/api/<name>` to `api/<name>.js`
and reloads the function when you edit it. It isn't part of the production build; on Vercel the
files in `api/` run as serverless functions as usual.

To actually send enquiry emails locally, put your Resend API key in `.env` (copy `.env.example`
if `.env` doesn't exist) and restart `npm run dev`; env changes need a restart. `.env` is
git-ignored. Without a key the form shows its error message and the terminal says which variable
is missing. Resend errors are also logged in the terminal, never sent to the browser.

`npx vercel dev` still works if you prefer it, but it's optional (it needs a Vercel login).

## Project layout

    index.html               SEO tags, JSON-LD
    api/enquiry.js           serverless function that emails enquiry form submissions
    .env.example             environment variables the enquiry email needs
    public/                  favicon.png, robots.txt, sitemap.xml
    src/
      config.js              ★ email, address, office hours (edit here)
      data/courses.jsx       ★ course categories and course list, incl. popup topics (edit here)
      data/logos.jsx         technology logos used by the course cards, course popup and Home tiles
      data/services.js       ★ service cards (also the Service options in the enquiry form)
      index.css              all styles
      App.jsx                routes
      assets/logos/          technology logos not available in react-icons
      components/            Header, Footer, Layout, CourseExplorer, CourseCard, CourseModal, Accordion, ...
      pages/                 Home, Technologies, Services, About, Contact
      hooks/                 usePageTitle

## What changed from the static version

- Pages are real routes (`/technologies`, `/services`, `/about`, `/contact`) instead of `#/about` etc.
  `vercel.json` rewrites every path to `index.html` so refreshing or sharing a deep link works.
- Email and address live in `src/config.js` instead of being repeated through the HTML.
- Clicking a course card opens a details popup; its "Enquire about this course" button, "Book Free
  Demo", "Talk to a Counsellor" and the footer "Send an enquiry" link all go to the Contact page
  enquiry form, pre-filling the message where relevant.
- Everything else (styles, layout, copy, form validation) is a straight port.

## Before going live – replace placeholders

1. `src/config.js` – check email, address, office hours
2. `index.html` – `your-domain.com` (canonical, og:url)
3. `public/robots.txt` and `public/sitemap.xml` – `your-domain.com`
   (add `/about`, `/services`, `/technologies`, `/contact` to the sitemap)
4. `src/pages/Home.jsx` – stats (1000+ Students, 4.9/5, 16+ Courses) and the sample `REVIEWS` (names, ratings, text)
5. `src/data/courses.jsx` – course names, descriptions, topics, categories
6. `src/pages/Contact.jsx` – paste the Google Maps embed in place of the `.map` note

## Enquiry form email

The Contact page form asks for full name, email, service, "I am a" (Student, Enterprise or College)
and a message. Enterprise and College visitors also give an organisation/college name and a phone
number. The form posts to `/api/enquiry` (`api/enquiry.js`), which checks the data again and emails
it through [Resend](https://resend.com) to the address in `ENQUIRY_TO_EMAIL`. Replying to that email
answers the visitor.

1. Create a Resend account using the email **harishsivakumarj@gmail.com**.
2. In Resend, create an API key.
3. In Vercel open Project → Settings → Environment Variables and add:
   - `RESEND_API_KEY` – the Resend API key
   - `ENQUIRY_FROM_EMAIL` – `Techademy <onboarding@resend.dev>`
   - `ENQUIRY_TO_EMAIL` – `harishsivakumarj@gmail.com` (separate several addresses with commas)
4. Redeploy. Environment variables only apply to deployments made after they are added.
5. Send a test enquiry from the live site. Check the spam folder for the first one and mark it
   "Not spam".

Without a verified domain, Resend only delivers to the email the Resend account was created with,
which is why the account must use harishsivakumarj@gmail.com. Once you verify your own domain in
Resend (Domains → Add domain), you can change `ENQUIRY_FROM_EMAIL` to an address on it, for example
`Techademy <enquiry@your-domain.com>`, and send to other addresses too.

If a variable is missing or Resend returns an error, the function logs it (Vercel → Logs) and the
form asks the visitor to email you directly.

## Deploy on Vercel

Import the repo (or run `vercel --prod`). Vercel detects Vite automatically:
build command `npm run build`, output directory `dist`.
Then add your domain under Project → Settings → Domains; SSL is issued automatically.
