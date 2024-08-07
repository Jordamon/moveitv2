/* global Email */
import React from 'react';
import shoeImage from '../../images/shoe-transparent-background-20.png';
import './ContactUs.css';

const ContactUs = () => {
  function sendEmail() {
    Email.send({
      SecureToken: "X",
      To: 'jordandhunt01@gmail.com',
      From: 'jordandhunt01@gmail.com',
      Subject: "New contact form enquiry",
      Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone number: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    )
  };

  return (
    <div>
      <div className="contact-page">
        <div className="container1">
          <div className="row">
            <div className="col-2 img-col">
              <div className="account-shoes">
                <img src={shoeImage} alt="Shoe" />
              </div>
            </div>
            <div className="col-2">
              <div className="contact-container">
                <form onSubmit={sendEmail}>
                  <h3>GET IN TOUCH</h3>
                  <input type="text" id="name" placeholder="Your Name" required />
                  <input type="email" id="email" placeholder="Email id" required />
                  <input type="text" id="phone" placeholder="Phone number" required />
                  <textarea id="message" rows="4" placeholder="How can we help?"></textarea>
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
