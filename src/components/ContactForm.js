
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactformstyles.css"

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i12nfpi', 'template_ximw7ob', form.current, 'fn9hKi55mjwEWaccD')
      .then((result) => {
          console.log(result.text);
          console.log('sent success');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="from-container">
      <h1>Send a Message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" name="name" />
        <input placeholder="Email" name="email" />
        <input placeholder="Phone" name="phone" type="tel" />
        <select name="granite">
          <option value="">Select Interested Granite</option>
          <option value="Tan red brown">Tan Red Brown</option>
          <option value="Shankarpalli brown">Shankarpalli Brown</option>
          <option value="Coffee">Coffee</option>
          <option value="White">White</option>
          <option value="Royal blue">Royal Blue</option>
          <option value="Madampalli">Madampalli</option>
          <option value="PSR red brown">PSR Red Brown</option>
          <option value="Brown lapatro">Brown Lapatro</option>
          <option value="Brown red lapatro">Brown Red Lapatro</option>
          <option value="Kondakattu red">Kondakattu Red</option>
          <option value="Blue">Blue</option>
          <option value="Antique lapatro">Antique Lapatro</option>
          <option value="K tize">K Tize</option>
        </select>

        <textarea placeholder="Message" rows="5" name='message'></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;

/*import "./contactformstyles.css"
function ContactForm(){
    return(
        <div className="from-container">
            <h1>Send a Message to us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Interested Granite"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}*/
/*import "./contactformstyles.css"

import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [granite, setGranite] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new data object with the form values
    const formData = {
      name,
      email,
      granite,
      message,
    };

    // Make a POST request to the API endpoint
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Success message from the server
        // Reset the form fields
        setName('');
        setEmail('');
        setGranite('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="from-container">
      <h1>Send a Message to us!</h1>
      <form onSubmit={handleSubmit}>
      <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Interested Granite"
          value={granite}
          onChange={(e) => setGranite(e.target.value)}
        />
        <textarea
          placeholder="Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;*/
