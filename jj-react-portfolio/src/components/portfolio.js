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
            carouselItems.push(
                <div>
                <img
                className="d-block w-100"
                src={Projects[i].photo}
                alt={Projects[i].name}
                key={Projects[i].id}
                ></img>
                <h3>{Projects[i].name}</h3>
                <p>{Projects[i].description}</p>
                <p>{Projects[i].builtWith}</p>
                <a>{Projects[i].deployLink}</a>
                <a>{Projects[i].repoLink}</a>
                </div>
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