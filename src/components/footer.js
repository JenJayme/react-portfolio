import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (

        <footer>
            <Container>
                <Row>
                    <Col xs={4} md={2} lg={2}>
                    jeniferjayme@gmail.com
                    </Col>
                    <Col xs={4} md={2} lg={2} className="text-center">
                    (408) 455-5643
                    </Col>
                    <Col xs={4} md={2} lg={2}>
                    Novato, CA
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;