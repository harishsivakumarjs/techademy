import { useEffect, useRef, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { COURSES } from '../data/courses'
import CourseCard from './CourseCard'
import CourseModal from './CourseModal'

// Category sidebar + course grid. Used on Home (starts on "popular") and Technologies (starts on "all").
// The URL can pick what to show: ?course=<slug> opens that course's popup, ?category=<id> selects a
// category (used by the footer "Courses" links). Unknown values are ignored.
export default function CourseExplorer({ categories, startCat, style }) {
  const [active, setActive] = useState(startCat)
  const [selected, setSelected] = useState(null)
  const opener = useRef(null)
  const [params, setParams] = useSearchParams()
  const courseParam = params.get('course')
  const categoryParam = params.get('category')
  const { key } = useLocation()

  const items = COURSES.filter((x) =>
    active === 'all' ? true : active === 'popular' ? x.pop : x.c === active
  )

  // key: re-apply on every navigation, so clicking the same category link again still selects it;
  // a plain link (e.g. footer "All Courses" -> /technologies) goes back to the starting category
  useEffect(() => {
    if (categories.some((c) => c.id === categoryParam)) setActive(categoryParam)
    else if (!courseParam) setActive(startCat)
  }, [categoryParam, courseParam, categories, startCat, key])

  useEffect(() => {
    const course = COURSES.find((x) => x.slug === courseParam)
    if (!course) return
    // show the card behind the popup: "All Courses" where there is one, else the course's own category
    setActive(categories.some((c) => c.id === 'all') ? 'all' : course.c)
    opener.current = null
    setSelected(course)
  }, [courseParam, categories])

  const open = (course, card) => {
    opener.current = card
    setSelected(course)
  }

  // drop ?course= (replace, not push) so back and refresh don't reopen the popup;
  // keepScroll tells ScrollToTop not to jump to the top
  const close = () => {
    setSelected(null)
    if (params.has('course')) {
      setParams(
        (p) => {
          p.delete('course')
          return p
        },
        { replace: true, state: { keepScroll: true } }
      )
    }
  }

  // return focus to the card once the dialog is gone (the page is inert while it is open)
  useEffect(() => {
    if (!selected && opener.current) {
      opener.current.focus()
      opener.current = null
    }
  }, [selected])

  return (
    <div className="explore" style={style}>
      <div className="cats" role="group" aria-label="Course categories">
        {categories.map((c) => (
          <button key={c.id} aria-pressed={c.id === active} onClick={() => setActive(c.id)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {c.icon}
            </svg>
            {c.name}
          </button>
        ))}
      </div>
      <div className="cgrid">
        {items.map((x) => (
          <CourseCard key={x.slug} course={x} onOpen={open} />
        ))}
      </div>
      {selected && <CourseModal course={selected} onClose={close} />}
    </div>
  )
}
