import React from 'react';
import Projects from './portfolio-data';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
    console.log("Projects imported as: ", Projects);
    let carouselItems = [];

    for (var i = 0; i < Projects.length; i++) {
        
        carouselItems.push(

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    key={Projects[i].id}
                />
                <Carousel.Caption>
                    <h3>{Projects[i].name}</h3>
                    <p>{Projects[i].description}</p>
                </Carousel.Caption>
            </Carousel.Item>

        )
    }
        return (
            <div>
            <Carousel>
                {carouselItems}
            </Carousel>
            </div>
        )
    }

export default Portfolio;


// [
//     'primary',
//     'secondary',
//     'success',
//     'danger',
//     'warning',
//     'info',
//     'light',
//     'dark',
//   ].map((variant, idx) => (
//     <Alert key={idx} variant={variant}>
//       This is a {variant} alert—check it out!
//     </Alert>
//   ));