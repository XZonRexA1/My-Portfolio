import tastyHome from '../../public/images/project images/project-home-image/tasty-meal-home.jpg'
import tastyMeal1 from '../../public/images/project images/tasty-meal-image/one.jpg'
import tastyMeal2 from '../../public/images/project images/tasty-meal-image/two.jpg'
import tastyMeal3 from '../../public/images/project images/tasty-meal-image/three.jpg'
import tastyMeal4 from '../../public/images/project images/tasty-meal-image/four.jpg'
import { Carousel } from 'react-responsive-carousel'

const CarouselImage2 = () => {
    return (
        <Carousel className='w-full md:w-96'>
            <div>
                <img src={tastyHome} />
            </div>
            <div>
                <img src={tastyMeal1} />
            </div>
            <div>
                <img src={tastyMeal3} />
            </div>
            <div>
                <img src={tastyMeal2} />
            </div>
            <div>
                <img src={tastyMeal4} />
            </div>
        </Carousel>
    );
};

export default CarouselImage2;