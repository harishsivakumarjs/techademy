import { useState } from 'react'
import Accordion from './Accordion'

// Accordion on the left; the panel on the right shows the open step and its progress dots.
export default function LearningExperience({ steps }) {
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]

  return (
    <div className="lx">
      <Accordion items={steps} active={activeStep} onChange={setActiveStep} />
      <div className="stage">
        <div className="step-card" aria-live="polite">
          {/* key: remount on change so the fade/slide-in runs for each step */}
          <div className="step-body" key={activeStep}>
            <p className="step-of">
              Step {activeStep + 1} of {steps.length}
            </p>
            <div className="step-ic" aria-hidden="true">{step.icon}</div>
            <h3>{step.title}</h3>
            <ul className="step-points">
              {step.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
          <div className="step-dots">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Go to step ${i + 1}: ${s.title}`}
                aria-current={i === activeStep ? 'step' : undefined}
                onClick={() => setActiveStep(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
