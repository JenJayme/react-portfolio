import React from 'react';
import { Media, Container, ResponsiveEmbed } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Container className="homeBackground">
                {/* <Row>
                    <Col> */}
                        <Media className="myVideo">
                            <ResponsiveEmbed aspectRatio="16by9">

                                <video autoPlay muted loop src={process.env.PUBLIC_URL + "./images/revelation.mp4"} />

                            </ResponsiveEmbed>
                        </Media>

                        {/* Name/Logo */}
                        {/* <img id="homeLogo" src="./images/jj-logo-lg-01.png" alt="Jen Jayme" /> */}

                    {/* </Col> */}
                    {/* <Col> */}
                        {/* Use a button to pause/play the video with JavaScript */}
                        {/* <div>
                            <Button id="pauseBtn" onClick="pauseVid()">pause video</Button>
                        </div> */}
                    {/* </Col> */}
                {/* </Row> */}

                {/* Overlay with text */}
                {/* <div className="overlay">
                    <p className="tagline">web developer | revelation engineer</p>
                </div> */}

            </Container>
        </div>

    )
}

export default Home;