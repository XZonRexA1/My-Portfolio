import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// job navigator image
import jobHome from '../../public/images/project images/project-home-image/job-navigator-home.jpg'
import jobOne from "../../public/images/project images/job-navigator-image/one.jpg";
import jobTwo from "../../public/images/project images/job-navigator-image/two.jpg";
import jobThree from "../../public/images/project images/job-navigator-image/three.jpg";

// tasty meal image 


const CarouselImage = () => {
  return (
    <Carousel
     className="w-full md:w-96"
    >
      <div>
        <img src={jobHome} />
      </div>
      <div>
        <img src={jobOne} />
      </div>
      <div>
        <img src={jobThree} />
      </div>
      <div>
        <img src={jobTwo} />
      </div>
    </Carousel>
  );
};

export default CarouselImage;
