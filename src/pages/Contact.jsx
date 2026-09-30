import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { SITE } from '../config'
import { SERVICES } from '../data/services'
import PageHead from '../components/PageHead'

const AUDIENCES = ['Student', 'Enterprise', 'College']
const INITIAL = { name: '', email: '', service: '', audience: '', organisation: '', phone: '', message: '', website: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s-]{10,15}$/

// Enterprise and College also give an organisation/college name and a phone number
const needsOrg = (audience) => audience === 'Enterprise' || audience === 'College'

// Same rules as api/enquiry.js; returns { field: message } for every invalid field, in form order
function validate(f) {
  const e = {}
  const name = f.name.trim()
  const email = f.email.trim()
  const message = f.message.trim()
  if (!name) e.name = 'Please enter your name.'
  else if (name.length > 100) e.name = 'Name must be 100 characters or fewer.'
  if (!EMAIL_RE.test(email) || email.length > 200) e.email = 'Please enter a valid email address.'
  if (!f.service) e.service = 'Please select a service.'
  if (!f.audience) e.audience = 'Please tell us who you are.'
  if (needsOrg(f.audience)) {
    const org = f.organisation.trim()
    const what = f.audience === 'College' ? 'college' : 'organisation'
    if (org.length < 2 || org.length > 150) e.organisation = `Please enter your ${what} name (2-150 characters).`
    if (!PHONE_RE.test(f.phone.trim())) e.phone = 'Please enter a valid phone number (10-15 digits).'
  }
  if (message.length < 10) e.message = 'Please write a message of at least 10 characters.'
  else if (message.length > 2000) e.message = 'Message must be 2000 characters or fewer.'
  return e
}

export default function Contact() {
  usePageTitle('Contact Us | Techademy Training Services')
  // links such as "Book Free Demo" pass a starting message in the router state
  const prefill = useLocation().state?.message
  const [form, setForm] = useState(() => (prefill ? { ...INITIAL, message: prefill } : INITIAL))
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // switching "I am a" clears the organisation/college name and phone, and their errors
  const setAudience = (e) => {
    const audience = e.target.value
    setForm((f) => ({ ...f, audience, organisation: '', phone: '' }))
    setErrors(({ organisation, phone, ...rest }) => rest)
  }

  // shared props for each visible field: value, change handler and error wiring
  const field = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: set,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? name + '-err' : undefined,
  })
  const err = (name) => errors[name] && <p className="ferr" id={name + '-err'}>{errors[name]}</p>

  async function submit(e) {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(first).focus()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service,
          audience: form.audience,
          ...(needsOrg(form.audience) && { organisation: form.organisation.trim(), phone: form.phone.trim() }),
          message: form.message.trim(),
          website: form.website,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error('Request failed')
      setForm(INITIAL)
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <>
      <PageHead crumb="Contact Us" title="Contact Us">
        Ask us about courses, fees, batch timings or a free demo class.
      </PageHead>

      <section className="sec">
        <div className="wrap cgrid2">
          <div className="cinfo">
            <div className="ci"><span className="ic">📍</span><div><b>Address</b><span>{SITE.address}</span></div></div>
            <div className="ci"><span className="ic">✉️</span><div><b>Email</b><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div></div>
            <div className="ci"><span className="ic">🕘</span><div><b>Office Hours</b><span>{SITE.hours}</span></div></div>
            {/* Paste your Google Maps embed <iframe> here in place of this note */}
            <div className="map">
              Google Map embed goes here — paste the "Embed a map" iframe code from Google Maps when deploying.
            </div>
          </div>

          <form className="enq" id="enquiry" tabIndex={-1} onSubmit={submit} noValidate>
            <h2>Send an Enquiry</h2>
            <div className="row2">
              <div>
                <label>
                  Full name
                  <input {...field('name')} autoComplete="name" maxLength={100} required />
                </label>
                {err('name')}
              </div>
              <div>
                <label>
                  Email
                  <input {...field('email')} type="email" autoComplete="email" maxLength={200} required />
                </label>
                {err('email')}
              </div>
            </div>
            <div className="row2">
              <div>
                <label>
                  Service
                  <select {...field('service')} required>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </label>
                {err('service')}
              </div>
              <div>
                <label>
                  I am a
                  <select {...field('audience')} onChange={setAudience} required>
                    <option value="" disabled>Select one</option>
                    {AUDIENCES.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                </label>
                {err('audience')}
              </div>
            </div>
            {needsOrg(form.audience) && (
              <div className="row2">
                <div>
                  <label>
                    {form.audience === 'College' ? 'College name' : 'Organisation name'}
                    <input
                      {...field('organisation')}
                      placeholder={form.audience === 'College' ? 'Enter college name' : 'Enter organisation name'}
                      autoComplete="organization"
                      maxLength={150}
                      required
                    />
                  </label>
                  {err('organisation')}
                </div>
                <div>
                  <label>
                    Phone number
                    <input {...field('phone')} type="tel" inputMode="tel" autoComplete="tel" maxLength={16} required />
                  </label>
                  {err('phone')}
                </div>
              </div>
            )}
            <div>
              <label>
                Message
                <textarea {...field('message')} rows="4" minLength={10} maxLength={2000} required />
              </label>
              {err('message')}
            </div>
            {/* honeypot: hidden from people, bots tend to fill it in */}
            <div className="hp" aria-hidden="true">
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set} />
              </label>
            </div>
            <div>
              <button className="btn btn-dark" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
              </button>
            </div>
            <div className="fmsg" role="status">
              {status === 'sent' && (
                <p className="ok">Thank you! Your enquiry has been sent. We'll get back to you by email shortly.</p>
              )}
              {status === 'failed' && (
                <p className="bad">
                  Something went wrong. Please try again or email us directly at{' '}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              )}
            </div>
            <p className="note">We'll reply to the email address you provide.</p>
          </form>
        </div>
      </section>
    </>
  )
}
