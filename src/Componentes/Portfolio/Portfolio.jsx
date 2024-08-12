import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import portfoliio from '../../assets/portfolio.webp';
import './Portfolio.css'

const Portfolio = () => {

    const [data, setData] = useState([
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
        <div>
            <div id="portfolio" className="container-fluid overflow-hidden" style={{ backgroundColor: "black" }} >

                <div className="container py-5">
                    <h2 className="display-5 pb-4 text-primary text-center" style={{ fontWeight: "600" }}>
                        <span className='text-light'>My </span> Portfolio
                    </h2>
                   
                    <div className="row services_col p-4 m-5">
                        {data.map((item, index) => {
                            return <div className="col_hover card1 border-0 border-bottom border-primary shadow-sm m-3 pt-2" key={index}
                                data-aos={item.aos} style={{ width: "350px" }}
                            >
                                <a href={item.path} target="blank">
                                    <div>
                                        <img src={item.img} className="img-fluid rounded-3" alt="No network" style={{ height: "150px" }} />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between mt-1">
                                    <p className="text-light " style={{ fontWeight: "500" }}>{item.title}</p>
                                    <a href={item.path} target="blank">
                                        <p className="text-primary">Demo...</p>
                                    </a>
                                </div>
                            </div>
                        })

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;