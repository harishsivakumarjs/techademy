import usePageTitle from '../hooks/usePageTitle'
import { ALL_CAT, CATS } from '../data/courses'
import PageHead from '../components/PageHead'
import CourseExplorer from '../components/CourseExplorer'

// "All Courses" replaces the "Popular Courses" category on this page
const CATEGORIES = [ALL_CAT, ...CATS.slice(1)]

export default function Technologies() {
  usePageTitle('Technologies & Courses | Techademy Training Services')

  return (
    <>
      <PageHead crumb="Technologies" title="Technologies We Teach">
        Every course includes hands-on labs, a real project and placement support.
      </PageHead>
      <section className="sec">
        <div className="wrap">
          <CourseExplorer categories={CATEGORIES} startCat="all" style={{ marginTop: 0 }} />
        </div>
      </section>
    </>
  )
}
