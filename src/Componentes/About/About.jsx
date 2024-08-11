import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../assets/about.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css'

const About = () => {
    return (
        <div>
            <Container>
                <FontAwesomeIcon className='text-warning' icon="fa-solid fa-arrow-right" />
                <h2>About <span>Me</span></h2>
                <Row>
                    <Col>
                        <div>
                            <h3>Name: <span>Bibi Khadiza</span></h3>
                            <h3>Qualification: <span>BSc in CSE (Final Year)</span></h3>
                            <h3>Expert: <span>MERN stack web development Technology.</span></h3>
                            <h3>Experience: <span>Fresher</span></h3>
                            <p>Hello! I'm Bibi Khadiza, a passionate MERN Stack web developer with a keen eye for creating seamless and efficient web applications. I specialize in building full-stack solutions that are both scalable and user-friendly. With a solid foundation in <span>(MongoDB, Express.js, React, and Node.js)</span> . I bring innovative ideas to life on the web.</p>
                        </div>
                        <div>
                            icon
                        </div>
                        <button>Resume</button>
                    </Col>
                    <Col>
                        <img src={about} className="rounded bannerImg" alt="..." />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;