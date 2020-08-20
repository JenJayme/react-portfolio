import React from 'react';
import Projects from './portfolio-data';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
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
                className="d-block w-100 .img-fluid"
                src={photoUrl}
                alt={Projects[i].name}
                key={Projects[i].id}
                ></img>
                {/* <Carousel.Caption>
                {Projects[i].name}
                </Carousel.Caption> */}
                <Card>
                    <Card.Title>
                    <h3>{Projects[i].name}</h3>
                    </Card.Title>
                    <Card.Text className="projectDesc">
                <p>{Projects[i].description}<br></br><span className="font-italic">
                Built with: {Projects[i].builtWith}</span></p>

                <Card.Link href={Projects[i].deployLink} className="text-left">Deployed</Card.Link>
                <Card.Link href={Projects[i].repoLink}>Repo</Card.Link>

                </Card.Text>
                </Card>
                </Carousel.Item>
            )
        }
        return (
            <div>
                <Container>
                    <Carousel className="projectCarousel">
                        {carouselItems}
                    </Carousel>
                </Container>
            </div>
        )
    }
}

export default Portfolio;