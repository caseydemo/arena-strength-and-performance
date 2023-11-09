import './styles/Services.css';
import Service from './Service';
function Services() {

  const image_path = process.env.PUBLIC_URL + '/assets/';

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];

  const services = [
    {
      title: "Open Gym",
      id: "open-gym",
      image: image_path + "open_gym_2.png",
      text: "Enjoy our facility with premium specialty fitness equipment which includes: strongman, powerlifting, crossfit, body building and functional movement amenities. All equipment is open for use to our members within hours of operation.",
      slideImages: slideImages
    },
    {
      title: "Personal Training",
      id: "personal-training",
      image: image_path + "bench_spot_1.png",
      text: "Work one on one with our qualified trainers and staff to reach your fitness goals based on what you need. Sessions are 1 hour long and geared towards your needs and capability.",
      slideImages: slideImages
    },
    {
      title: "Group Classes",
      id: "group-classes",
      image: image_path + "bench_spot_1.png",
      text: "Small group training that is limited to 6 participants at a time allowing more individualized attention and coaching. Classes are focused on building functional strength with compound and unilateral exercises with conditioning at the end. These are designed for all levels of fitness and capability.",
      slideImages: slideImages
    },    
    {
      title: "Rehab Only",
      id: "rehab-only",
      image: image_path + "rehab_1.JPG",
      text: "Work one on one with a member of our staff for 30 minutes per session. These sessions are centered around movement optimization and rehabilitating injuries or chronic muscular pain.",
      slideImages: slideImages
    }
  ];


  return (

    /*
      two column layout
      left column: image
      right column: text
    */
    <div className='services'>
      {/* loop through and render each hardcoded service */}
      {/* TODO - put this into a db instead of being hardcoded */}
      {services.map((service, index) => (
        <Service
          key={index}
          title={service.title}
          id={service.id}
          image={service.image}
          text={service.text}
          slideImages={service.slideImages}
        />
      ))}
      
    </div>
  )
}
export default Services;