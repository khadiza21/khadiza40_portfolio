import React from 'react';
import about from '../../assets/about.gif'
import './About.css'
import { Container } from 'react-bootstrap';
const About = () => {

   


    return (
        <div >

            <div className='overflow-hidden p-0 m-0 ' style={{ backgroundColor: "#111111" }}>
                < Container>
                    <div className=' py-5'>
                        <h2 className="display-5 pb-4 text-primary text-center" style={{ fontWeight: "600" }}>
                            <span className='text-light'>About </span> Me
                        </h2>
                        <div className='row justify-content-between py-5' style={{ minHeight: "60vh" }}>
                            <div className='col-lg-5 col-md-5 col-sm-11 d-flex justify-content-center '>
                                <div className='home_img_div'>
                                    <img src={about} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-5 col-sm-11 mx-5 '>
                                <p>
                                    <span className='text-primary about_name'>Name:</span> <span className='text-light about_detail'>Bibi Khadiza </span>
                                </p>
                                <p>
                                    <span className='text-primary about_name'>Qualification:</span> <span className='text-light about_detail'>BSc in CSE (Final Year)</span>
                                </p>
                                <p>
                                    <span className='text-primary about_name'>Experties:</span> <span className='text-light about_detail'>MERN stack web development Technology.</span>
                                </p>
                                <p>
                                    <span className='text-primary about_name'>Experience:</span> <span className='text-light about_detail'>1+ Years</span>
                                </p>
                                <p className='text-white text-justify'>
                                    Hello! I'm Bibi Khadiza, a passionate MERN Stack web developer with a keen eye for creating seamless and efficient
                                    web applications. I specialize in building full-stack solutions that are both scalable and user-friendly.
                                    With a solid foundation in <span className='text-primary'>(MongoDB, Express.js, React, and Node.js).</span>  I bring innovative ideas to life on the web.
                                </p>
                             
                                <div className='d-flex align-items-center flex-wrap'>
                                    <button type='btn btn1 mx-2'>LinkedIn</button>

                                    <a href="https://wa.me/+8801816260539?text=Hey Sir!/nHow can i help you?" target='blank'>
                                        <button type='btn btn1 mx-2 '>WhatsApp</button>
                                    </a>

                                    <a href="https://www.facebook.com" target='blank'>
                                        <button type='btn btn1 mx-2'>Facebook</button></a>

                                    <a href="mailto:bibikhadiza474@gmail.com" target="_blank">
                                        <button type='btn btn1 mx-2'>Mail</button></a>

                                </div>
                                <a className="btn btn-outline-primary mt-3" href="{resume}" download role="button" style={{ width: "145px" }}>
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div></Container>
            </div>

        </div>
    );
};

export default About;