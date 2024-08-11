import React from 'react';
import { Container } from 'react-bootstrap';


const About = () => {
    return (
        <div>
            <Container>
                <h2>About <span>Me</span></h2>

                <div>
                    <h3>Name: <span>Bibi Khadiza</span></h3>
                    <h3>Qualification: <span>BSc in CSE (Final Year)</span></h3>
                    <h3>Expert: <span>MERN stack web development Technology.</span></h3>
                    <h3>Experience: <span>Fresher</span></h3>

                    <p>Hello! I'm Sharjeel Akhtar, a passionate MERN Stack web developer with a keen eye for creating seamless and efficient web applications. I specialize in building full-stack solutions that are both scalable and user-friendly. With a solid foundation in <span>(MongoDB, Express.js, React, and Node.js)</span> . I bring innovative ideas to life on the web.</p>
                </div>


                <div>
icon 
                </div>
                <button>Resume</button>
            </Container>



        </div>
    );
};

export default About;