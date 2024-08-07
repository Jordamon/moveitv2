import React from 'react'
import Footer from '../../footer/Footer';
import ContactUs from '../../contactUs/ContactUs';
import '../../../App.css';
import './Contact.css';

function Contact() {
    return (
      <div className="Contact-container">
        <div>
          <ContactUs />
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Contact;