import { Link } from 'react-router-dom'
import { SITE } from '../config'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Logo />
            <p>Job-oriented IT training with hands-on projects and placement support.</p>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/technologies">Technologies</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3>Courses</h3>
            <ul>
              <li><Link to="/technologies">Java Full Stack</Link></li>
              <li><Link to="/technologies">Python</Link></li>
              <li><Link to="/technologies">Data Science</Link></li>
              <li><Link to="/technologies">AWS &amp; DevOps</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>{SITE.addressShort}</li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><Link to="/contact#enquiry">Send an enquiry</Link></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
