import '../styles/Form.css';
import Card from '../UI/Card';
import emailjs from 'emailjs-com';
import React, { useState, useRef } from 'react';

function Form () {
  console.log('emailjs id: ' + process.env.REACT_APP_EMAILJS_ID)
  console.log('emailjs pw: ' + process.env.REACT_APP_EMAILJS_PW)
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    emailjs.sendForm('default_service', process.env.REACT_APP_EMAILJS_ID, form.current, process.env.REACT_APP_EMAILJS_PW)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Card className='contact-form'>
      {/* if !formSubmitted, display 'contact us' and form, else display 'thank you' */}
      
      {!formSubmitted && (
        // form not submitted - display form
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          
          <div className='form-group'>
            <label>Name</label>
            <input type="text" name="user_name" className='form-control' />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input type="email" name="user_email" className='form-control' aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          
          <div className='form-group'>
            <label>Message</label>
            <textarea name="message"  className='form-control' />
          </div>          
          
          <input className='btn btn-info btn-sm' id='contact-us-button' type="submit" value="Send" />            
          
        </form>
      )}
      {formSubmitted && (
        // form submitted - display thank you
        <div>
          <h1>Thank You</h1>
          <p>We appreciate your feedback.</p>
        </div>
      )}



    </Card>
  );
};
export default Form;