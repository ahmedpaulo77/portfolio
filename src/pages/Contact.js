import { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Contact.css';

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <p className="section-label">Contact</p>
        <h1 className="contact-title">Let's Work Together</h1>
        <p className="contact-sub">Have a project in mind? I'd love to hear about it.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">ahmed@email.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">london</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💼</span>
              <div>
                <p className="info-label">Status</p>
                <p className="info-value" style={{color: '#4ade80'}}>Available for work</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {sent ? (
              <div className="success-msg">
                <span>✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell me about your project..." rows="5"></textarea>
                </div>
                <button className="send-btn" onClick={() => setSent(true)}>
                  Send Message →
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;