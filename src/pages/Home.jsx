import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import { CATS } from '../data/courses'
import { LOGOS } from '../data/logos'
import CourseExplorer from '../components/CourseExplorer'
import TechLogo from '../components/TechLogo'
import Accordion from '../components/Accordion'
import Band from '../components/Band'

const POINTS = [
  [<b key="a">Industry-expert trainers</b>, ' with real project experience'],
  [<b key="b">100% hands-on</b>, ' lab practice and live projects'],
  [<b key="c">Placement assistance</b>, ' – resume, mock interviews & referrals'],
  ['Flexible ', <b key="d">weekday & weekend batches</b>, ' – classroom or online'],
]

const TILES = [
  ['Java', LOGOS.java], ['Python', LOGOS.python], ['React', LOGOS.react],
  ['AWS', LOGOS.aws], ['Azure', LOGOS.azure], ['Docker', LOGOS.docker],
  ['Power BI', LOGOS.powerbi], ['Selenium', LOGOS.selenium], ['Salesforce', LOGOS.salesforce],
]

const STEPS = [
  { title: 'Learn', text: 'Structured syllabus taught by industry trainers, from basics to advanced topics, in classroom or live online sessions.' },
  { title: 'Practice', text: 'Daily lab exercises and assignments so you write real code and use real tools in every class.' },
  { title: 'Build Projects', text: 'Complete real-world projects you can add to your resume and GitHub and explain in interviews.' },
  { title: 'Assess', text: 'Regular tests and trainer feedback show where you stand and what to improve.' },
  { title: 'Get Placed', text: 'Resume building, mock technical and HR interviews, and job referrals to help you land your first role.' },
]

const MOCK_ROWS = [
  { name: 'Java Full Stack', pct: 72, pill: 'Resume', g: 'linear-gradient(135deg,#0B4F9C,#1596D6)' },
  { name: 'Project: E-commerce App', pct: 40, pill: 'Start', g: 'linear-gradient(135deg,#7A1F2B,#C0392B)' },
  { name: 'HTML, CSS & JavaScript', pct: 100, pill: 'Review', g: 'linear-gradient(135deg,#E44D26,#F7B733)' },
]

// Sample reviews: replace with real student reviews before going live
const REVIEWS = [
  { name: 'Priya Ramesh', rating: 5, color: '#2563EB', course: 'Java Full Stack', title: 'Hands-on and practical', text: 'The trainer explained every concept with live coding, and the project helped me answer interview questions with confidence.' },
  { name: 'Karthik Subramanian', rating: 5, color: '#0EA5E9', course: 'Data Analytics', title: 'Great placement support', text: 'Mock interviews and resume guidance made a big difference. The team followed up until I got my offer.' },
  { name: 'Ananya Sharma', rating: 4, color: '#4F46E5', course: 'AWS & DevOps', title: 'Flexible and supportive', text: 'Weekend batches fit my job schedule, and recorded sessions helped me revise anytime.' },
]

function Review({ r }) {
  return (
    <div className="tcard">
      <div className="who">
        <span className="av" style={{ background: r.color }}>{r.name[0]}</span>
        <div>
          <b>{r.name}</b>
          <small>{r.course}</small>
          <span className="stars" role="img" aria-label={`Rated ${r.rating} out of 5`}>
            {'★'.repeat(r.rating) + '☆'.repeat(5 - r.rating)}
          </span>
        </div>
      </div>
      <h4>{r.title}</h4>
      <p>{r.text}</p>
    </div>
  )
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 6l6 6-6 6" />
  </svg>
)

export default function Home() {
  usePageTitle('Techademy Training Services | IT Training, Courses & Placement Support')

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="badge">Job-Oriented IT Training Institute</span>
            <h1>
              Learn In-Demand Tech Skills and Build a Successful <span className="o">IT Career!</span>
            </h1>
            <p className="tag">Classroom &amp; live online training with real projects and placement support.</p>
            <div className="btns">
              <Link className="btn btn-dark" to="/technologies">
                Explore Courses <Arrow />
              </Link>
              <Link
                className="btn btn-out"
                to="/contact#enquiry"
                state={{ message: "Hi, I'd like to book a free demo class." }}
              >
                Book Free Demo <Arrow />
              </Link>
            </div>
            <ul className="points">
              {POINTS.map((p, i) => (
                <li key={i}>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-right">
            <p className="lead">
              Start your IT career with <span>Techademy</span> 🚀
            </p>
            <div className="dots" aria-hidden="true" />
            <div className="hcard">
              <h3>Upcoming batches</h3>
              <div className="brow">
                <div><b>Full Stack Development</b><small>Weekday · Morning &amp; evening</small></div>
                <span className="chip">Classroom</span>
              </div>
              <div className="brow">
                <div><b>Python &amp; Data Science</b><small>Weekend batch</small></div>
                <span className="chip">Live Online</span>
              </div>
              <div className="brow">
                <div><b>AWS &amp; DevOps</b><small>Weekday · Evening</small></div>
                <span className="chip">Classroom</span>
              </div>
            </div>
            <div className="hcard" style={{ width: 'min(290px,84%)', marginTop: 16 }}>
              <h3 style={{ marginBottom: 8 }}>Your learning path</h3>
              <div className="flow">
                <div>Fresher / Career gap</div>
                <span>›››</span>
                <div>Software Developer</div>
              </div>
            </div>
            <span className="pin" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* STATS – replace with the institute's real numbers */}
      <div className="wrap stats">
        <div className="box">
          <div className="stat">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="9" cy="8" r="4" />
                <path d="M1 21c.6-4 3.8-7 8-7s7.4 3 8 7z" />
                <circle cx="17" cy="7" r="3" opacity=".6" />
              </svg>
            </div>
            <h3>1000+ Students</h3>
            <p>Trained &amp; placed</p>
          </div>
          <div className="stat">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" />
                <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
                <path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-3.9V7.5H3.1a10 10 0 0 0 0 9z" />
                <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5L6.4 10C7.2 7.8 9.4 6 12 6z" />
              </svg>
            </div>
            <h3>4.9/5 <span className="stars">★★★★★</span></h3>
            <p>Google rating</p>
          </div>
          <div className="stat">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19V5M4 19h16M8 15l4-4 3 3 5-6" />
              </svg>
            </div>
            <h3>16+ Courses</h3>
            <p>Across development, data, cloud &amp; testing</p>
          </div>
        </div>
      </div>

      {/* SKILLS PANEL */}
      <section className="sec">
        <div className="wrap">
          <div className="panel">
            <div>
              <h2>Master the Technologies Companies Are Hiring For!</h2>
              <p>
                From programming and full stack development to data science, cloud and testing — our courses are
                built around the skills employers ask for in interviews. Learn with real projects and step
                confidently into your first tech job.
              </p>
            </div>
            <div className="tiles">
              {TILES.map(([name, logo]) => (
                <div className="tile" key={name}>
                  <TechLogo logo={logo} decorative />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSE EXPLORER */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center">
            <p className="eyebrow">FIND THE PERFECT COURSE</p>
            <h2 className="h2">Explore Our Range of IT Courses</h2>
          </div>
          <CourseExplorer categories={CATS} startCat="popular" />
        </div>
      </section>

      {/* LEARNING EXPERIENCE */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center">
            <p className="eyebrow">HOW DO YOU BECOME JOB-READY?</p>
            <h2 className="h2">The Techademy Learning Experience</h2>
          </div>
          <div className="lx">
            <Accordion items={STEPS} />
            <div className="stage" aria-hidden="true">
              <div className="mock">
                <div className="t">‹ My Learning</div>
                <div className="tabs">
                  <span className="on">Ongoing</span>
                  <span>Assigned</span>
                  <span>Completed</span>
                </div>
                {MOCK_ROWS.map((r) => (
                  <div className="mrow" key={r.name}>
                    <div className="th" style={{ background: r.g }} />
                    <div className="bar2">
                      <b>{r.name}</b>
                      <div className="prog"><i style={{ width: `${r.pct}%` }} /></div>
                    </div>
                    <span className="pill">{r.pill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center">
            <h2 className="h2">What Our Students Are Saying</h2>
            <p className="sub">Real feedback from students who trained with us.</p>
          </div>
          <div className="tgrid">
            <Review r={REVIEWS[0]} />
            <div className="tcard feature">
              <h4>From <mark>Fresher</mark> to <mark>Developer</mark> in months</h4>
              <p>Hear how our students started their IT careers</p>
            </div>
            <Review r={REVIEWS[1]} />
            <Review r={REVIEWS[2]} />
          </div>
        </div>
      </section>

      <div className="wrap">
        <Band
          title="Not sure which course is right for you?"
          text="Talk to our career counsellor — free guidance, no obligation."
          action={
            <Link
              className="btn btn-primary"
              to="/contact#enquiry"
              state={{ message: 'Hi, I need help choosing a course.' }}
            >
              Talk to a Counsellor
            </Link>
          }
        />
      </div>
    </>
  )
}
