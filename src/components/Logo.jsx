import { Link } from 'react-router-dom'

// tagline = show "TRAINING SERVICES" under the name (the footer does, the header doesn't)
export default function Logo({ label, tagline = true }) {
  return (
    <Link className="logo" to="/" aria-label={label}>
      <span>
        <b>
          TECH<span className="logo-a">A</span>DEMY
        </b>
        {tagline && <small>TRAINING SERVICES</small>}
      </span>
    </Link>
  )
}
