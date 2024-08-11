import React from 'react';

import "./Footer.css"
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className=''>
            <footer className="container-fluid text-light py-5" style={{ backgroundColor: "black" }}>
                <div className="container p-4">
                    <section className="my-3 d-flex flex-wrap gap-4">
                        <a

                            className=" btn-floating fs-5"
                            href=""
                            role="button"
                        >
                            aedIn
                        </a>
                        <a

                            className=" btn-floating fs-5"
                            href="https://www.facebook.com"
                            target='blank'
                            role="button"
                        >
                            facebook
                        </a>
                        <a

                            className=" btn-floating fs-5"
                            href="https://wa.me/+8801816260539?text=Hey !/nHow can i help you?" target='blank'
                            role="button"
                        >
                            WhatsApp
                        </a>



                        <a

                            className=" btn-floating fs-5"
                            href="mailto:sharjeelakhtar245@gmail.com" target="_blank"
                            role="button"
                        >
                            mail
                        </a>
                    </section>
                    <section className="">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-primary fw-bold">Quick as</h5>
                                <ul className="list-unstyled my-3">
                                    <li className='mb-2'>
                                        <a className="text-light" href="home">
                                            Home
                                        </a>
                                    </li>
                                    <li className='mb-2'>
                                        <a className="text-light" to="about">
                                            About
                                        </a>
                                    </li>
                                    <li className='mb-2'>
                                        <a className="text-light" to="service">
                                            Services
                                        </a>
                                    </li>
                                    <li className='mb-2'>
                                        <a className="text-light" to="portfolio">
                                            Portfolio
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-primary fw-bold">Services</h5>
                                <ul className="list-unstyled my-3" >
                                    <li className='mb-2'>
                                        <a className="text-light" to="service">
                                            Web Development
                                        </a>
                                    </li >


                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-primary fw-bold">Direct Contact</h5>
                                <ul className="list-unstyled my-3">
                                    <li className='mb-2'>
                                        <a className="text-light" href="mailto:sharjeelakhtar245@gmail.com" target="_blank">
                                            bibikhadiza474@gmail.com
                                        </a>
                                    </li>
                                    <li className='mb-2'>
                                        <a className="text-light" href="Phone: +">
                                            +
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    className="text-center p-3"
                >
                    © {currentYear} Copyright:
                    <a className="text-reset fw-bold mx-3" href="">
                        Bibi Khadiza
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;