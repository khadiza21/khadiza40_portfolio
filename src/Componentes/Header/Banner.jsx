import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../assets/banner.gif'
import './Banner.css';

const Banner = () => {
    return (
        <div style={{ backgroundColor: "black" }}  >
            <Container className='p-5'>
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5">

                        <h2 className="display-5 pb-4 text-light" style={{ fontWeight: "600" }}>
                            My Creativity Is Your <span className="text-primary">Success |</span>
                        </h2>
                        <p className="fs-5 text-white lh-base pb-5  ">
                            Elevate your online presence with our expert web development services and seamless MERN Stack integration.
                        </p>


                        <a
                            className="d-flex align-items-center btn btn-outline-primary fw-bold"
                            // href={resume}
                            download
                            role="button"
                            style={{ width: "145px" }}
                        >
                            <span className="me-2">Resume</span>
                            <i class="fa fa-id-card" aria-hidden="true"></i>
                        </a>


                    </div>
                    <div className="col-lg-5 pt-5 my-5">
                        <img src={banner} className="img-fluid overflow-auto rounded bannerImg" alt="..." />
                    </div>

                </div>
            </Container>

        </div>

    );
};

export default Banner; 