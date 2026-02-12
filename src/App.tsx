import './App.css'

const offerings = [
  {
    title: 'Positioning Sprint',
    description:
      'Find your sharpest message, strongest audience segments, and the clearest value story in two weeks.',
  },
  {
    title: 'Conversion Design',
    description:
      'Rebuild your key pages with measurable UX decisions that improve trust and action rates.',
  },
  {
    title: 'Growth Operations',
    description:
      'Install an execution rhythm with weekly experiments, reporting, and accountable owners.',
  },
]

const wins = [
  { value: '3.2x', label: 'average pipeline lift in 90 days' },
  { value: '34%', label: 'higher landing-page conversion' },
  { value: '70+', label: 'venture and enterprise teams supported' },
]

const roadmap = [
  {
    phase: 'Week 1',
    title: 'Deep Audit',
    description:
      'Review positioning, product signal, and funnel leaks to isolate the highest-leverage fixes.',
  },
  {
    phase: 'Week 2-3',
    title: 'Design + Build',
    description:
      'Ship the new marketing surface with clear narratives, modern UI patterns, and fast technical handoff.',
  },
  {
    phase: 'Week 4+',
    title: 'Optimize',
    description:
      'Run experiments weekly, measure outcomes, and compound gains with a repeatable growth system.',
  },
]

function App() {
  return (
    <div className="brand-variant">
      <div className="texture-layer" />

      <header className="site-header">
        <a className="logo" href="#home">
          <span className="logo-badge">NL</span>
          <span className="logo-wordmark">Northline Studio</span>
        </a>
        <nav className="header-links">
          <a href="#services">Services</a>
          <a href="#workflow">Workflow</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="shell">
        <section className="hero" id="home">
          <p className="eyebrow">Editorial + technical growth partner</p>
          <h1>Brand-first landing pages for teams that need results, not noise.</h1>
          <p className="hero-text">
            We help product and marketing teams turn underperforming websites
            into clear, high-conviction growth surfaces with faster execution
            and stronger messaging.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#contact">
              Start Project
            </a>
            <a className="btn btn-secondary" href="#services">
              View Services
            </a>
          </div>
          <ul className="ticker" aria-label="client types">
            <li>SaaS</li>
            <li>Fintech</li>
            <li>AI Tools</li>
            <li>B2B Platforms</li>
          </ul>
        </section>

        <section className="wins-grid">
          {wins.map((item) => (
            <article key={item.label} className="win-card">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section className="services" id="services">
          <div className="section-title">
            <p>Services</p>
            <h2>Built for teams who need better output in the next quarter.</h2>
          </div>
          <div className="service-grid">
            {offerings.map((offering) => (
              <article key={offering.title} className="service-card">
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow" id="workflow">
          <div className="section-title">
            <p>Workflow</p>
            <h2>Simple cadence, clear ownership, weekly momentum.</h2>
          </div>
          <ol className="roadmap">
            {roadmap.map((item) => (
              <li key={item.phase}>
                <span>{item.phase}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact-panel" id="contact">
          <h2>Want a variant tailored to your product category?</h2>
          <p>
            Send your current URL and goals. We&apos;ll respond with a practical
            direction you can execute immediately.
          </p>
          <a className="btn btn-primary" href="mailto:hello@northline.studio">
            hello@northline.studio
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>Northline Studio</p>
        <p>Conversion-led web direction for modern product teams.</p>
      </footer>
    </div>
  )
}

export default App
