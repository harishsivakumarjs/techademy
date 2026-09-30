import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/technologies', label: 'Technologies' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us', className: 'nav-cta' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site">
      <div className="wrap bar">
        <Logo label="Techademy Training Services home" tagline={false} />
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mainnav"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
        <nav className={'main' + (open ? ' open' : '')} id="mainnav" aria-label="Main">
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={l.className}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
