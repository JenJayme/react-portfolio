import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Bio () {
    return (
        <Container>
            <Row>
                <Col>
                <p className="bio">
                Jen is enjoying a second career focused on full-stack web development after 20+ years of professional experience in marketing, communications and fundraising.</p>
                
                <p className="bio">She has served in leadership roles at several prominent social impact organziations including Big Brothers Big Sisters, Community Action Marin, Hispanic Scholarship Fund, St. Vincent de Paul Society, and Santa Clara University, and consulted with numerous organizations, leveraging exceptional leadership, project management and interpersonal skills to raise millions of dollars for great causes.</p>

                <p className="bio">
                Along the way, Jen has frequently served as the resident website administrator, database builder and integrator, and all-around tech whiz.  She has been creating solutions with technology since the Commodore 64 was a new thing, and has overseen several new website launches and database installations for large organizations.  She is now pursuing a long-held passion for technology while earning a certificate in full-stack web development at UC Berkeley's rigorous Coding Boot Camp. </p>
                
                <p className="bio">Jen's proficiencies include Javascript, jQuery, React, APIs, and front-end design with Adobe Create Suite, as well as server-side and database architectures such as MySql, MongoDB and Node/Express servers.  Jen graduated from UC Berkeley with a B.A. in English with Honors.  
                </p>
                <p className="bio">
                Check out the Skills and Work History pages for more details.
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