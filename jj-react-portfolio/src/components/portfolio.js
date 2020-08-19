import React from 'react';
import Projects from './portfolio-data';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Project from './project';


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: Projects
        }
    }

    render(){

        let Projects = this.state.projects;
        const carouselItems = [];
        
        for (var i = 0; i < Projects.length; i++) {
            let photoUrl = process.env.PUBLIC_URL + "/images/" + Projects[i].photo;
            carouselItems.push(
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={photoUrl}
                alt={Projects[i].name}
                key={Projects[i].id}
                ></img>
                <Carousel.Caption>
                {Projects[i].name}
                </Carousel.Caption>
                <h3>{Projects[i].name}</h3>
                <p>{Projects[i].description}</p>
                
                <p><strong>Built With:</strong></p>
                <p>{Projects[i].builtWith}</p>

                <p><strong>Links:</strong></p>
                <a href={Projects[i].deployLink}>deployed</a>
                <a href={Projects[i].repoLink}>repo on GitHub</a>
                </Carousel.Item>
            )
        }
        return (
            <div>
                <Container>
                    <Carousel>
                        {carouselItems}
                    </Carousel>
                </Container>
            </div>
        )
    }
}

export default Portfolio;