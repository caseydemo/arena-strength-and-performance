import Form from './UI/Form';

function Contact() {

  const submitContactDataHandler = (contactData) => {
    console.log('submitContactDataHandler');
    console.log(contactData);
  }

  return (
    <div className='contact-container' id="contact-us">
      <Form onSubmitContactData={submitContactDataHandler} />
    </div>
              
  )
}
export default Contact; 