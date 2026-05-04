import './HeroAbout.css'

export default function HeroAbout() {
  return (
    <section className="hero-about" id="about">
      <div className="container">
        <div className="hero-about-content">
          <div className="photo-section">
            <div className="photo-placeholder">
              <div className="photo-text">Add your photo</div>
              <div className="photo-instruction">(250x250px)</div>
            </div>
          </div>

          <div className="about-section">
            <div className="about-header">
              <h1>Dancan Matoke Oribu</h1>
              <p className="role">Software Developer & Data Analyst</p>
            </div>

            <div className="bio">
              <p>
                Software Developer & Data Analyst with 3+ years' experience transforming raw data into actionable insights and building production-grade Web3 applications on the Internet Computer Protocol (ICP). Proficient in React, TypeScript, Python, Motoko, and SQL. 
              </p>
              <p>
                Recognized as Best Software Developer at ICP Hub Kenya. Brings dual capability: shipping fullstack dApps, integrating blockchain data pipelines, and creating Tableau/Power BI dashboards that drive strategic decisions.
              </p>
            </div>

            <div className="contact-info">
              <a href="mailto:dancanoribu@gmail.com" className="contact-link">
                <span>📧</span> dancanoribu@gmail.com
              </a>
              <a href="tel:+254746138718" className="contact-link">
                <span>📱</span> +254 746 138 718
              </a>
              <a href="https://github.com/dancanoribu" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>🐙</span> github.com/dancanoribu
              </a>
              <p className="location">📍 Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
