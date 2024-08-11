import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
             <Container>
                <Row>
                    <Col>
                    <h1>My Creativity Is Your <span className='text-primary'>Success|</span> </h1>
                    <p>Elevate your online presence with our expert web development services and seamless MERN Stack integration.</p>
                    <div className='d-flex'>
                        <button>Get Started -- </button>
                        <button>Resume</button>
                    </div>
                    </Col>
                    <Col>
                    <img src="" className="rounded navIcon" alt="..." />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;