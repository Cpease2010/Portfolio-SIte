import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Row, Button } from 'reactstrap';
import Dino from '../images/dino.png'
import GitDuel from '../images/gitDuel.png'
import PrivProject from '../images/privProject.png'
import '../css/Projects.css'

const Projects = (props) => {
    return (
        <div>
            <h1 className='projectSettings'>Some Projects I've Worked On</h1>
            <Row className='projects'>
                <Col sm='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle>
                                <Button color="primary" size="lg" href='http://gitduel.surge.sh'>SEE MORE</Button>
                            </CardTitle>
                        </CardBody>
                        <CardImg width="100%" src={GitDuel} alt="Photo of Git Duel project" />
                        <CardBody>
                            <CardText>
                                <p>Axios</p>
                                <p>GitHub API</p>
                                <p>CORS</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle>
                                <Button color="primary" size="lg" href='http://dino1.surge.sh'>SEE MORE</Button>
                            </CardTitle>
                        </CardBody>
                        <CardImg width="100%" src={Dino} alt="Photo of Dino project"/>
                        <CardBody>
                            <CardText>
                                <p>Vue.js</p>
                                <p>Form Data</p>
                                <p>Life Cycle Methods</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle>
                                <Button color="primary" size="lg" disabled>Private</Button>
                            </CardTitle>
                        </CardBody>
                        <CardImg width="100%" src={PrivProject} alt="This shows the icons I used for a private project" />
                        <CardBody>
                            <CardText>
                                <p>React</p>
                                <p>Gatsby.js</p>
                                <p>GraphQL</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;