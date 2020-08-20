import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from 'react-bootstrap';
import skillsData from '../components/skills-data';
import { CardColumns } from 'react-bootstrap';
// import BootstrapTable from 'react-bootstrap-table-next';

function SkillsTable () {

        let Technologies = [];
        let Leadership = [];
        let Other = [];

        for (var i = 0; i < skillsData.length; i++) {
            switch (skillsData[i].category) {
                case "Technologies":
                    Technologies.push(
                        <Card className="skills">
                        <Card.Text>
                            <p>{skillsData[i].skill}</p>
                        </Card.Text>
                        </Card>)
                        break;
                case "Leadership": 
                    Leadership.push(
                        <Card className="skills">
                        <Card.Text>
                            <p>{skillsData[i].skill}</p>
                        </Card.Text>
                        </Card>)
                        break;
                case "Other":
                    Other.push(
                        <Card className="skills">
                        <Card.Text>
                            <p>{skillsData[i].skill}</p>
                        </Card.Text>
                        </Card>)
                        break;
                default: console.log("Other category found", skillsData[i].skill)
            }
        }

        return (
            <Container className="skillsTable">
                <Row>
                    <Col>
                    <h5>Technologies</h5>
                    {Technologies}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h5>Leadership</h5>
                    {Leadership}
                    </Col>
                    <Col>
                    <h5>Other</h5>
                    {Other}
                    </Col>
                </Row>
            </Container>
    )
}

export default SkillsTable;