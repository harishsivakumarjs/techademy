import TechLogo from './TechLogo'

// onOpen(course, cardElement) opens the details popup; the element is used to return focus on close
export default function CourseCard({ course: x, onOpen }) {
  return (
    <button
      type="button"
      className="course"
      aria-label={`${x.t}, view course details`}
      onClick={(e) => onOpen(x, e.currentTarget)}
    >
      <div className="cban" style={{ background: `linear-gradient(120deg,${x.g[0]},${x.g[1]})` }}>
        {x.pop && <span className="pop">POPULAR</span>}
        <h4>{x.b}</h4>
        <div className="logos">
          {x.logos.map((l) => (
            <span className="lg" key={l.name}>
              <TechLogo logo={l} />
            </span>
          ))}
        </div>
      </div>
      <div className="cbody">
        <h3>{x.t}</h3>
        <p className="desc">{x.desc}</p>
        <div className="cfoot">
          <div>
            <small>Course details</small>
            <b>View details</b>
          </div>
          <span className="arr">→</span>
        </div>
      </div>
    </button>
  )
}
