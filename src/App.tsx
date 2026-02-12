import './App.css'

const featureCards = [
  {
    title: 'Ship Faster',
    description:
      'Get from concept to customer-ready release with focused planning and production support.',
  },
  {
    title: 'Design That Converts',
    description:
      'Turn rough ideas into clear journeys with interface systems built for trust and momentum.',
  },
  {
    title: 'Scale With Confidence',
    description:
      'Track outcomes, remove bottlenecks, and expand without losing quality or team clarity.',
  },
]

const metrics = [
  { value: '4.8x', label: 'faster launch cycles' },
  { value: '91%', label: 'client retention rate' },
  { value: '120+', label: 'products launched' },
]

function App() {
  return (
    <div className="landing-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">JW</span>
          <span>JunoWorks</span>
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="kicker">Operational focus for product teams</p>
          <h1>Build a landing experience that makes people stay and act.</h1>
          <p className="hero-copy">
            JunoWorks helps teams launch polished product experiences with
            better positioning, cleaner execution, and tighter handoffs from
            idea to release.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Book Strategy Call
            </a>
            <a className="button button-secondary" href="#features">
              Explore Platform
            </a>
          </div>
          <p className="trust-line">
            Trusted by teams in fintech, healthtech, and enterprise SaaS
          </p>
        </section>

        <section className="metrics">
          {metrics.map((item) => (
            <article key={item.label} className="metric-card">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section className="features" id="features">
          <div className="section-header">
            <p>What you get</p>
            <h2>A practical growth engine, not another dashboard.</h2>
          </div>
          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-header">
            <p>How it works</p>
            <h2>Three focused phases from kickoff to traction.</h2>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Diagnose</h3>
                <p>
                  Align on goals, constraints, and opportunities using your
                  current product and data.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Build</h3>
                <p>
                  Design and ship high-impact improvements with clear weekly
                  milestones and ownership.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Optimize</h3>
                <p>
                  Measure outcomes, iterate quickly, and scale with a repeatable
                  operating rhythm.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="cta" id="contact">
          <h2>Ready to turn your product page into a growth asset?</h2>
          <p>
            Share your goals and we&apos;ll map the highest-leverage path in a
            30-minute strategy session.
          </p>
          <a className="button button-primary" href="mailto:hello@junoworks.co">
            hello@junoworks.co
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
