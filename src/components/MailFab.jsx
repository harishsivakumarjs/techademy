import { SITE } from '../config'

export default function MailFab() {
  return (
    <a className="fab" href={`mailto:${SITE.email}`} aria-label="Email us" title="Email us">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    </a>
  )
}
