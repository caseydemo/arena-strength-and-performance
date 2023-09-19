import './styles/Services.css';
import Service from './Service';
function Services() {

  const image_path = process.env.PUBLIC_URL + '/assets/';

  const services = [
    {
      title: "Open Gym",
      id: "open-gym",
      image: image_path + "open_gym_2.png",
      text: "open gym text"
    },
    {
      title: "Personal Training",
      id: "personal-training",
      image: image_path + "bench_spot_1.png",
      text: "personal training text"
    },
    {
      title: "Group Classes",
      id: "group-classes",
      image: image_path + "bench_spot_1.png",
      text: "group training text"
    },    
    {
      title: "Strongman",
      id: "strongman",
      image: image_path + "strong_man_1.png",
      text: "strongman text"
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
        />
      ))}
      
    </div>
  )
}
export default Services;