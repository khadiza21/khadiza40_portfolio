import Aos from 'aos';
import { useEffect, useState } from 'react';
import portfoliio from '../../assets/portfolio/1.png';
import './Portfolio.css'

const Portfolio = () => {

    const [data] = useState([
        {
            img: portfoliio, path: "", Aos: 'slide-right',
            title: " Website"
        },
        {
            img: portfoliio, path: "/", aos: 'zoom-in',
            title: " Portfolio Website"
        },
        {
            img: portfoliio, path: "", aos: 'slide-left',
            title: "  landing Page"
        },
        {
            img: portfoliio, path: "", aos: 'fade-up',
            title: " Website"
        },
        {
            img: portfoliio, path: "", aos: 'fade-down',
            title: " website"
        },
        {
            img: portfoliio, path: "", aos: 'fade-up',
            title: "Layout"
        },
        {
            img: portfoliio, path: "", aos: 'fade-up',
            title: "Layout"
        },
        {
            img: portfoliio, path: "", aos: 'fade-up',
            title: "Layout"
        },


    ])

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in',
            delay: 25,
        });
    }, [])


    return (

        <div id="portfolio" className="container-fluid overflow-hidden " style={{ backgroundColor: "black" }} >

            <div className="container py-5 ">
                <h2 className="display-5 pb-4 text-primary text-center" style={{ fontWeight: "600" }}>
                    <span className='text-light'>My </span> Portfolio
                </h2>

                <div className="row py-4 w-full">
                    {data.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index} data-aos={item.aos}>
                                <div
                                    className="my-3 border-0 border-bottom border-primary shadow-sm pt-2"
                                    style={{ width: "100%" }}>


                                    <div className="image-wrap">
                                        <a href="">
                                            <img
                                                src={item.img}
                                                alt="No network"
                                                className="img-fluid rounded-3 " />
                                        </a>
                                    </div>







                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="text-light" style={{ fontWeight: "500" }}>{item.title}</p>
                                    </div>
                                    <div className="my-1">
                                        <div className="text-light"><h6>Frontend Technology: <span>HTML, CSS, JS</span></h6></div>
                                        <div className="text-light"><h6>Backend Technology: <span>None</span></h6></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="text-light">
                                            <span>Github: </span>
                                            <a href={item.path} target="blank" className="underline-offset-1">Client</a>
                                            <a href={item.path} target="blank" className="underline-offset-1">Server</a>
                                        </p>
                                        <a href={item.path} target="blank">
                                            <p className="text-primary">Live Site</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>


        </div>

    );
};

export default Portfolio;