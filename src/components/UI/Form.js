import '../styles/Form.css';
import Card from '../UI/Card';

import React, { useState } from 'react';


function Form(props) {  

  // set initial state for whether user has submitted form
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  // handle form submission
  const handleSubmit = (e) => {
    // prevent default behavior of form submit
    e.preventDefault(); // prevents page reload

    // validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    if(!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // this is ultimately what we want to submit to the server
    const dataToSubmit = {
      ...formData
    };

    // set formSubmitted to true
    setFormSubmitted(true);

    // log data to console - ultimately we will submit this to the server    
    // alert('form data to submit: ' + JSON.stringify(dataToSubmit));
    props.onSubmitContactData(dataToSubmit);

  };

  // handle input change
  const handleInputChange = (e) => {
    // update formData with new value        

    // update formData with new value - include previous values
    setFormData((prevFormData) => {
      
      return {
        ...prevFormData,
        [e.target.id]: e.target.value
      };
    });

  };

  // form handling in react
  // https://www.shecodes.io/athena/53051-how-to-submit-a-form-and-redirect-to-another-page-in-react

  return (
    <Card className='contact-form'>
      {/* if !formSubmitted, display 'contact us' and form, else display 'thank you' */}
      {!formSubmitted && (
        <div>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name="name" className='form-control' onChange={handleInputChange} />
            </div>
            
            <div className='form-group'>              
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name="email" className='form-control' aria-describedby="emailHelp" placeholder="Enter email" onChange={handleInputChange} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>            
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name="message" className='form-control' onChange={handleInputChange} />
            </div>              

            <button type="submit" className='btn btn-primary'>Submit</button>

          </form>
        </div>
      )}
      {formSubmitted && (
        <div>
          <h1>Thank You</h1>
          <p>We appreciate your feedback.</p>
        </div>
      )}
    </Card>
  );
}
export default Form; 