import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../../assets/icon/p.png';
import './Navbarr.css';

const Navbarr = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" className=" navBar" >
                <Container className='fw-bold px-5'>
                    <Navbar.Brand href="#home">
                        <div className='d-flex align-items-center'>
                            <img src={icon} className="rounded navIcon" alt="..." />
                            <span  className=' navIconText'>Hadiza</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navList">
                            <Nav.Link href="#about" className='text-white '>About</Nav.Link>
                            <Nav.Link href="#skills" className='text-white'>Skills</Nav.Link>
                            <Nav.Link href="#portfolio" className='text-white'>Portfolio</Nav.Link>                         
                            <a href="https://www.linkedin.com/in/bb-khadiza/" target='_blank'><button  className='btn btn-outline-primary fw-bold '>Contact Me</button>   </a>                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;