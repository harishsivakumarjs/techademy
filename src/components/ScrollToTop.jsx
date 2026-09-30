import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top whenever the route changes (the original site did this on every hash change).
// Links with a hash (e.g. /contact#enquiry) scroll to and focus that element instead.
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  // key changes on every navigation, so clicking the same hash link again still scrolls
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!el) return
    el.scrollIntoView({ block: 'start' })
    el.focus({ preventScroll: true })
  }, [hash, key])

  return null
}
