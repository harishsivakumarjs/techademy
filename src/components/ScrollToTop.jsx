import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top on every navigation, including ones that only change the query string
// (e.g. the footer's /technologies?category=cloud while already on /technologies).
// Links with a hash (e.g. /contact#enquiry) scroll to and focus that element instead.
// Navigations with state { keepScroll: true } (closing the course popup) leave the scroll alone.
export default function ScrollToTop() {
  const { hash, key, state } = useLocation()

  // key changes on every navigation (hash and state belong to that same location),
  // so clicking the same link again still scrolls
  useEffect(() => {
    if (state?.keepScroll) return
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!el) return
    el.scrollIntoView({ block: 'start' })
    el.focus({ preventScroll: true })
  }, [key])

  return null
}
