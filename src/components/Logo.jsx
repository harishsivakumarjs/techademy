import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

// tagline = show "TECHNOLOGY & TRAINING COMPANY" under the name (the footer does, the header doesn't)
export default function Logo({ label, tagline = true }) {
  return (
    <Link className="logo" to="/" aria-label={label}>
      <img className="logo-img" src={logo} alt="" />
      <span>
        <b>
          TECH<span className="logo-a">A</span>DEMY
        </b>
        {tagline && <small>TECHNOLOGY &amp; TRAINING COMPANY</small>}
      </span>
    </Link>
  )
}
