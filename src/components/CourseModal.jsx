import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TechLogo from './TechLogo'

// Course details popup on the native <dialog>: Escape, the Close buttons and a backdrop click all
// call onClose. CourseExplorer unmounts it on close and returns focus to the card.
export default function CourseModal({ course: x, onClose }) {
  const ref = useRef(null)
  const downOnBackdrop = useRef(false)

  useEffect(() => {
    const dialog = ref.current
    dialog.showModal()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
      if (dialog.open) dialog.close()
    }
  }, [])

  // The content fills the dialog, so a click whose target is the dialog itself landed on the backdrop.
  // Both press and release must be there, so a text selection dragged outside doesn't close it.
  const onMouseDown = (e) => (downOnBackdrop.current = e.target === e.currentTarget)
  const onClick = (e) => {
    if (downOnBackdrop.current && e.target === e.currentTarget) onClose()
  }

  return (
    <dialog
      ref={ref}
      className="cmodal"
      aria-labelledby="cm-title"
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onMouseDown={onMouseDown}
      onClick={onClick}
    >
      <div className="cm-ban" style={{ background: `linear-gradient(120deg,${x.g[0]},${x.g[1]})` }}>
        <h2 id="cm-title">{x.t}</h2>
        <div className="cm-logos">
          {x.logos.map((l) => (
            <span className="cm-lg" key={l.name}>
              <TechLogo logo={l} />
            </span>
          ))}
        </div>
        <button type="button" className="cm-close" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <div className="cm-body">
        <h3>About this course</h3>
        <p>{x.desc}</p>
        <h3>What you'll learn</h3>
        <ul className="cm-topics">
          {x.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="cm-foot">
        <Link
          className="btn btn-primary"
          to="/contact#enquiry"
          state={{ message: `Hi, I'd like details about the ${x.t} course.` }}
          onClick={onClose}
        >
          Enquire about this course
        </Link>
        <button type="button" className="btn btn-out" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  )
}
