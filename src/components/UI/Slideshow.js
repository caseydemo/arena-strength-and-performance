import { Slide } from "react-slideshow-image";
import "../styles/Slideshow.css";

function Slideshow(props) {
  const slideImages = props.slideImages;

  // loop over slideImages and console.log each url
  slideImages.forEach((slideImage) => {
    console.log(slideImage.url);
  });

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  // slideshow ref: https://www.npmjs.com/package/react-slideshow-image
  return (
    <>
      {/* if slideImages is empty or null, return an empty div */}
      {slideImages && (
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      )}
      {!slideImages && <div>no slide images</div>}
    </>
  );
}
export default Slideshow;
