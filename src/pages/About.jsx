import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import PageHead from '../components/PageHead'
import Band from '../components/Band'

const DIFFERENTIATORS = [
  { icon: '👨‍🏫', bg: '#E3F4EA', title: 'Expert Trainers', text: 'Learn from professionals who use these technologies at work every day.' },
  { icon: '💻', bg: '#DBEAFE', title: 'Hands-on Learning', text: 'Lab practice in every class and real projects for your portfolio.' },
  { icon: '🤝', bg: '#E0E7FF', title: 'Placement Support', text: 'Resume building, mock interviews and job referrals.' },
]

export default function About() {
  usePageTitle('About Us | Techademy Technology and Training Company')

  return (
    <>
      <PageHead crumb="About Us" title="About Techademy">
        Helping students and professionals build successful careers in technology.
      </PageHead>

      <section className="sec">
        <div className="wrap two">
          <div className="prose">
            <p>Techademy is a technology and training company helping students, graduates, institutions and working professionals start and grow their careers in technology.</p>
            <p>We believe people learn technology best by doing it. Every course combines concept classes with lab practice and a real project, guided by trainers who work in the industry.</p>
            <p>After training, we continue supporting our students with resume preparation, mock interviews and job referrals until they are ready for their first role.</p>
            <p>Our team brings over 50 years of combined experience in IT and Banking training.</p>
          </div>
          <div className="mvg">
            <div className="mv">
              <div className="ic" style={{ background: '#DBEAFE' }}>🎯</div>
              <h3>Our Mission</h3>
              <p>To make practical, job-oriented IT training affordable and accessible to every learner.</p>
            </div>
            <div className="mv">
              <div className="ic" style={{ background: '#E0E7FF' }}>🔭</div>
              <h3>Our Vision</h3>
              <p>To be the training partner students and companies trust for industry-ready skills.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="exp">
            <strong className="exp-num">50+</strong>
            <div>
              <h2>Years of combined experience</h2>
              <p>
                Across IT and Banking training, our team has helped learners and professionals build practical,
                job-ready skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="center">
            <p className="eyebrow">WHY TECHADEMY</p>
            <h2 className="h2">What Makes Us Different</h2>
          </div>
          <div className="why">
            {DIFFERENTIATORS.map((d) => (
              <div className="mv" key={d.title}>
                <div className="ic" style={{ background: d.bg }}>{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Band
            title="Visit us for a free demo class"
            text="Meet the trainers and see how our classes work."
            action={<Link className="btn btn-primary" to="/contact">Contact Us</Link>}
          />
        </div>
      </section>
    </>
  )
}
