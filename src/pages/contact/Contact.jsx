import { BsHouseFill , BsTelephoneFill , BsEnvelopeFill } from "react-icons/bs";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
          <BsHouseFill />
            Address
          </div>
          <p className="contact-item-text">Iraq-Baghdad-Alrashid St</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
          <BsTelephoneFill />
            Phone
          </div>
          <p className="contact-item-text">123-456-789</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
          <BsEnvelopeFill />
            Email
          </div>
          <p className="contact-item-text">info@fakeemail.com</p>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="text" placeholder="Email *" />
        </div>
        <textarea
          placeholder="Your Message *"
          className="contact-textarea"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
