
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,CardTitle, CardSubtitle,Col,Row,Button } from 'reactstrap';
import Dino from '../images/dino.png'
import GitDuel from '../images/gitDuel.png'
import PrivProject from '../images/privProject.png'
import '../css/Projects.css'

const Projects = (props) => {
    return (
        <Row className='projects'>
            <Col sm='4'>
                <Card className='text-center'>
                    <CardBody>
                        <CardTitle>
                            <Button color="primary" size="lg" href='http://gitduel.surge.sh'>Git Duel Project</Button>
                        </CardTitle>
                    </CardBody>
                    <CardImg width="100%" src={GitDuel} alt="Photo of Git Duel project" />
                    <CardBody>
                        <CardText>
                            <h4>Axios</h4>
                            <h4>GitHub API</h4>
                            <h4>CORS</h4>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>
                <Card className='text-center'>
                    <CardBody>
                        <CardTitle>
                            <Button color="primary" size="lg" href='http://dino1.surge.sh'>Dinos Project</Button>
                        </CardTitle>
                    </CardBody>
                    <CardImg width="100%" src={Dino} alt="Photo of Dino project"/>
                    <CardBody>
                        <CardText>
                            <h4>Vue.js</h4>
                            <h4>Form Data</h4>
                            <h4>Life Cycle Methods</h4>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>
                <Card className='text-center'>
                    <CardBody>
                        <CardTitle>
                            <Button color="primary" size="lg" disabled>Private Project</Button>
                        </CardTitle>
                    </CardBody>
                    <CardImg width="100%" src={PrivProject} alt="This shows the icons I used for a private project" />
                    <CardBody>
                        <CardText>
                            <h4>React</h4>
                            <h4>Gatsby.js</h4>
                            <h4>GraphQL</h4>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Projects;