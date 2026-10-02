import usePageTitle from '../hooks/usePageTitle'
import { SITE } from '../config'
import PageHead from '../components/PageHead'

const STAND_FOR = [
  { icon: '🏆', bg: '#DBEAFE', title: 'Proven Training Expertise', text: 'A strong foundation in IT education and professional training, built through years of experience and continuous evolution.' },
  { icon: '🎯', bg: '#E0E7FF', title: 'Industry-Relevant Learning', text: 'Programs designed around evolving technologies, workplace requirements, and emerging career opportunities.' },
  { icon: '💻', bg: '#DBEAFE', title: 'Practical Learning', text: 'Hands-on training that helps learners connect concepts with real-world applications.' },
  { icon: '👨‍🏫', bg: '#E0E7FF', title: 'Expert-Led Training', text: 'Experienced trainers who bring technical knowledge, practical insights, and industry perspectives into the learning experience.' },
  { icon: '🚀', bg: '#DBEAFE', title: 'Future-Ready Skills', text: 'Continuous learning focused on the technologies and capabilities shaping the future.' },
]

const WHY_CHOOSE = [
  { icon: '🤝', bg: '#DBEAFE', title: 'Learner-Centric Approach', text: 'Every learner has unique goals, aspirations, and learning needs. Our programs are designed to be engaging, practical, relevant, and focused on meaningful outcomes.' },
  { icon: '🎯', bg: '#E0E7FF', title: 'Industry-Relevant Learning', text: "Technology and workplace requirements are constantly changing. Our programs are aligned with current technology trends and industry expectations, helping learners develop skills relevant to today's workplace and tomorrow's opportunities." },
  { icon: '🔄', bg: '#DBEAFE', title: 'Continuous Evolution', text: "Learning doesn't stop when a course ends. We continuously adapt our programs, technologies, and teaching methodologies to keep pace with the changing digital landscape." },
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
        25+ Years of Experience. Building Skills. Shaping Futures.
      </PageHead>

      <section className="sec">
        <div className="wrap two about-intro">
          <div className="prose">
            <p>For more than two decades, Techademy has been empowering individuals and organizations with the skills to succeed in a rapidly evolving digital world.</p>
            <p>
              We bring together <strong>expert trainers, industry-aligned programs, practical learning, and modern technology</strong> to deliver training that goes beyond theory.
            </p>
            <p>
              Our focus is simple — <strong>build relevant skills, develop confidence, and create opportunities</strong>. Whether you are starting your career, upgrading your expertise, or enabling your workforce, Techademy helps you stay ready for what’s next.
            </p>
          </div>
          <div className="years">
            <strong>25+</strong>
            <span>Years of Experience</span>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <h2 className="h2 center">What We Stand For</h2>
          <div className="stand">
            {STAND_FOR.map((c) => (
              <Card c={c} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap two">
          <div className="mv">
            <div className="ic" style={{ background: '#E0E7FF' }}>🔭</div>
            <h3>Our Vision</h3>
            <p>To empower people and organizations with the skills and knowledge they need to thrive in a rapidly evolving digital world.</p>
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
          <h2 className="h2 center">Why Choose Us?</h2>
          <div className="why">
            {WHY_CHOOSE.map((c) => (
              <Card c={c} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="company">
            <span>{SITE.name}</span>
            <span className="gstin">GSTIN: {SITE.gstin}</span>
          </div>
        </div>
      </section>
    </>
  )
}
