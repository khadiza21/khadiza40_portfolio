import React from 'react';
import "./Footer.css"
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className=''>
            <footer className="container-fluid text-light py-5" style={{ backgroundColor: '#111111' }}>
                <div className="container p-4">
                    <section className="my-3 d-flex flex-wrap gap-4">

                        <a href="https://www.linkedin.com/in/bb-khadiza/" target='_blank' className='text-light fs-3  customHover'>  <i className="fa fa-linkedin-square" aria-hidden="true"></i> </a>


                        <a href="https://github.com/khadiza21" target='_blank' className='text-light fs-3  customHover'>
                            <i className="fa fa-github-square" aria-hidden="true"></i></a>

                        <a href="https://wa.me/+8801816260539?text=Hey Sir!/nHow can i help you?" target='_blank' className='text-light fs-3  customHover'><i className="fa fa-whatsapp" aria-hidden="true"></i> </a>

                        <a href="https://t.me/+8801816260539?text=Hey Sir!/nHow can i help you?" target='_blank' className='text-light fs-3  customHover'> <i className="fa fa-telegram" aria-hidden="true"></i></a>

                        <a href="https://www.facebook.com/profile.php?id=100075783558238" target='_blank' className='text-light fs-3  customHover'> <i className="fa fa-facebook-official" aria-hidden="true"></i></a>

                        <a href="mailto:bibikhadiza474@gmail.com" target="_blank" className='text-light fs-3  customHover'>
                            <i className="fa fa-envelope" aria-hidden="true"></i></a>

                    </section>
                    <section className="">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-primary fw-bold">Quick as</h5>
                                <ul className="list-unstyled my-3">
                                    <li className='mb-2'>
                                        <a className="text-light" href="#home">
                                            Home
                                        </a>
                                    </li>
                                    <li className='mb-2'>
                                        <a className="text-light" href="#about">
                                            About
                                        </a>
                                    </li>
                                    
                                    <li className='mb-2'>
                                        <a className="text-light" href="#skills">
                                            Skills
                                        </a>
                                    </li>
                                    <li className='mb-2'>
                                        <a className="text-light" href="#portfolio">
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