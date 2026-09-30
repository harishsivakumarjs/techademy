import { useEffect, useRef, useState } from 'react'
import { COURSES } from '../data/courses'
import CourseCard from './CourseCard'
import CourseModal from './CourseModal'

// Category sidebar + course grid. Used on Home (starts on "popular") and Technologies (starts on "all").
export default function CourseExplorer({ categories, startCat, style }) {
  const [active, setActive] = useState(startCat)
  const [selected, setSelected] = useState(null)
  const opener = useRef(null)

  const items = COURSES.filter((x) =>
    active === 'all' ? true : active === 'popular' ? x.pop : x.c === active
  )

  const open = (course, card) => {
    opener.current = card
    setSelected(course)
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
          <CourseCard key={x.t} course={x} onOpen={open} />
        ))}
      </div>
      {selected && <CourseModal course={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
