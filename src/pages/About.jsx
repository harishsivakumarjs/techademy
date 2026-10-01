import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import PageHead from '../components/PageHead'
import Band from '../components/Band'

const STAND_FOR = [
  { icon: '🏆', bg: '#DBEAFE', title: '25+ Years of Experience', text: 'Proven expertise in IT education and professional training.' },
  { icon: '🎯', bg: '#E0E7FF', title: 'Industry-Relevant Learning', text: 'Programs aligned with evolving technology and workplace needs.' },
  { icon: '💻', bg: '#DBEAFE', title: 'Practical Learning', text: 'Hands-on experiences that connect knowledge with real-world application.' },
  { icon: '👨‍🏫', bg: '#E0E7FF', title: 'Expert-Led Training', text: 'Experienced trainers delivering technical expertise and practical insights.' },
  { icon: '🚀', bg: '#DBEAFE', title: 'Future-Ready Skills', text: 'Continuous learning focused on the technologies shaping tomorrow.' },
]

const WHY_CHOOSE = [
  { icon: '🏆', bg: '#DBEAFE', title: '25+ Years of Experience', text: 'With over 25 years of experience in IT education and professional training, we bring proven expertise, industry understanding, and a commitment to quality learning.' },
  { icon: '🤝', bg: '#E0E7FF', title: 'Learner-Centric Approach', text: 'Every learner has unique goals and aspirations. Our training is designed to be engaging, relevant, practical, and focused on meaningful outcomes.' },
  { icon: '📈', bg: '#DBEAFE', title: 'Industry-Relevant Learning', text: "Our programs are aligned with evolving technology trends and industry requirements, helping learners build skills that are relevant to today's workplace." },
]

function Card({ c }) {
  return (
    <div className="mv">
      <div className="ic" style={{ background: c.bg }}>{c.icon}</div>
      <h3>{c.title}</h3>
      <p>{c.text}</p>
    </div>
  )
}

export default function About() {
  usePageTitle('About Us | Techademy Technology and Training Company')

  return (
    <>
      <PageHead crumb="About Us" title="About Us">
        25+ Years of Learning. Evolving with Technology.
      </PageHead>

      <section className="sec">
        <div className="wrap two about-intro">
          <div className="prose">
            <p>For over 25 years, we have been empowering individuals and organizations with the skills needed to succeed in a technology-driven world.</p>
            <p>At Techademy, we combine decades of training experience, industry-aligned learning, expert trainers, and modern technology to deliver practical and future-ready learning experiences.</p>
          </div>
          <div className="years">
            <strong>25+</strong>
            <span>Years of Experience</span>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <h2 className="h2 center">Experience That Drives Your Growth</h2>
          <div className="prose narrow">
            <p>Technology never stands still — and neither does learning.</p>
            <p>From foundational IT skills to emerging technologies, we continuously evolve our programs to help students, professionals, and organizations stay relevant, build confidence, and unlock new opportunities.</p>
            <p>Our approach goes beyond traditional training. We focus on practical knowledge, real-world application, and skills that create lasting impact.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h2 center">What We Stand For</h2>
          <div className="stand">
            {STAND_FOR.map((c) => (
              <Card c={c} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap two">
          <div className="mv">
            <div className="ic" style={{ background: '#E0E7FF' }}>🔭</div>
            <h3>Our Vision</h3>
            <p>To empower people and organizations with the skills to thrive in a rapidly evolving digital world.</p>
          </div>
          <div className="mv">
            <div className="ic" style={{ background: '#DBEAFE' }}>🎯</div>
            <h3>Our Mission</h3>
            <p>To deliver impactful technology learning that transforms knowledge into skills, skills into confidence, and confidence into opportunity.</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Band
            title="25+ Years Behind Us. A Future Ahead."
            text="With more than two decades of experience and a constant focus on what’s next, we continue to help learners and organizations Learn. Evolve. Transform."
            action={<Link className="btn btn-primary" to="/contact">Contact Us</Link>}
          >
            <p className="band-note">Build the skills for tomorrow, today.</p>
          </Band>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="h2 center">Why Choose Us?</h2>
          <div className="why">
            {WHY_CHOOSE.map((c) => (
              <Card c={c} key={c.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
