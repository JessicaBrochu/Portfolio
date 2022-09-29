import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm("service_u62affi", "template_4gshdma",  e.currentTarget, "GBG2OZlOdP08Ivar3")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.currentTarget.reset()
  }

  return (
    <div className="contact">
      <div className="wrapper">
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact