import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import PageHead from '../components/PageHead'
import Band from '../components/Band'
import { SERVICES } from '../data/services'

export default function Services() {
  usePageTitle('Services | Techademy Training Services')

  return (
    <>
      <PageHead crumb="Services" title="Our Services">
        Training and career support for students, companies and colleges.
      </PageHead>

      <section className="sec">
        <div className="wrap sgrid">
          {SERVICES.map((s) => (
            <div className="scard" key={s.title}>
              <div className="ic" style={{ background: s.bg }}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap">
        <Band
          title="Need training for your team or college?"
          text="We'll build a plan around your requirements."
          action={<Link className="btn btn-primary" to="/contact">Get in Touch</Link>}
        />
      </div>
    </>
  )
}
