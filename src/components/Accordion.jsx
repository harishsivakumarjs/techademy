import { useState } from 'react'

// Only one item open at a time, like the original
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div className="acc-item" data-open={isOpen} key={it.title}>
            <button aria-expanded={isOpen} onClick={() => setOpen(i)}>
              <span className="n">{i + 1}</span>
              {it.title}
              <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <p className="txt">{it.text}</p>
          </div>
        )
      })}
    </div>
  )
}
