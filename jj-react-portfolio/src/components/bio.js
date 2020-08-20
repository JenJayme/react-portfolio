import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Bio () {
    return (
        <Container>
            <Row>
                <Col><p className="text-justify">
                "After 20+ years of professional experience in fundraising, marcomms and project management, Jen  is now embracing a second career in full-stack web development.  She has served in leadership roles at several prominent social impact organziations including Big Brothers Big Sisters, Community Action Marin, Hispanic Scholarship Fund, St. Vincent de Paul Society, and Santa Clara University, and has consulted with numerous organizations.  Jen graduated from UC Berkeley with a B.A. in English with Honors, and over the past two decades, has built a successful career in social impact fundraising and leadership, raising millions for great causes.  She has also been creating solutions with technology since the Commodore 64 was a new thing, and is now pursuing a long-held passion for technology while earning a certificate in full-stack web development at UC Berkeley Coding Boot Camp."
                </p>
                </Col>
                <Col s={1}>
                    <img className="headshot" src="../images/jen-head-shot.png" alt="Jen Jayme" />
                </Col>
            </Row>
        </Container>
    )
}

export default Bio;