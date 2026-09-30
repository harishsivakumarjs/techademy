import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MailFab from './MailFab'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <MailFab />
    </>
  )
}
