import React from 'react';
// import Projects from './portfolio-data';
import Carousel from 'react-bootstrap/Carousel';

const photoUrlPrefix = process.env.PUBLIC_URL + "/images/";

function Project(props) {
    // console.log("Projects imported as: ", Projects);

    return (

        <Carousel.Item>
            <h1>Carousel Item</h1>
            <img
                className="d-block w-100"
                src={props.photo}
                alt="Alt Text"
                key={props.id}
            ></img>
            <Carousel.Caption>
                <h1>Carousel Caption</h1>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>{props.builtWith}</p>
                <a>{props.deployLink}</a>
                <a>{props.repoLink}</a>
            </Carousel.Caption>
        </Carousel.Item>
    )
    
}

export default Project;