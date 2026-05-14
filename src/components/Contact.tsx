import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Get in Touch</h2>
            <p>
              I&apos;m always interested in hearing about new opportunities and connecting with fellow developers and data enthusiasts. Feel free to reach out!
            </p>
          </div>

          <div className="contact-methods">
            <a href="mailto:dancanoribu@gmail.com" className="contact-card">
              <div className="card-icon"></div>
              <h3>Email</h3>
              <p>dancanoribu@gmail.com</p>
            </a>

            <a href="tel:+254746138718" className="contact-card">
              <div className="card-icon"></div>
              <h3>Phone</h3>
              <p>+254 746 138 718</p>
            </a>

            <a href="https://github.com/devmatoke" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="card-icon"></div>
              <h3>GitHub</h3>
              <p>https://github.com/devmatoke</p>
            </a>

            <a href="#" className="contact-card" onClick={(e) => e.preventDefault()}>
              <div className="card-icon"></div>
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Dancan Matoke Oribu. All rights reserved.</p>
      </footer>
    </section>
  )
}
