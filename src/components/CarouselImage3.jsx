import { Carousel } from 'react-responsive-carousel';
import enigmaHome from '../../public/images/project images/project-home-image/enigma-home.jpg'
import enigma1 from '../../public/images/project images/enigma-magic-image/one.jpg'
import enigma2 from '../../public/images/project images/enigma-magic-image/two.jpg'
import enigma3 from '../../public/images/project images/enigma-magic-image/three.jpg'
import enigma4 from '../../public/images/project images/enigma-magic-image/four.jpg'
import enigma5 from '../../public/images/project images/enigma-magic-image/five.jpg'
import enigma6 from '../../public/images/project images/enigma-magic-image/six.jpg'

const CarouselImage3 = () => {
    return (
         <Carousel className='w-full md:w-96'>
            <div>
                <img src={enigmaHome} />
            </div>
            <div>
                <img src={enigma1} />
            </div>
            <div>
                <img src={enigma2} />
            </div>
            <div>
                <img src={enigma3} />
            </div>
            <div>
                <img src={enigma4} />
            </div>
            <div>
                <img src={enigma5} />
            </div>
            <div>
                <img src={enigma6} />
            </div>
        </Carousel>
    );
};

export default CarouselImage3;