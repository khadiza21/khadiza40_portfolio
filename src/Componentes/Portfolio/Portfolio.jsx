import Aos from "aos";
import { useEffect, useState } from "react";
import mastermall from "../../assets/portfolio/mastermall.png";
import foodieland from "../../assets/portfolio/foodieland.png";
import cipher from "../../assets/portfolio/Cipher.png";
import noorflix from "../../assets/portfolio/noorflix.png";
import transport from "../../assets/portfolio/transport.png";
import travel from "../../assets/portfolio/travel.png";
import gadget from "../../assets/portfolio/Gadget.png";
import home from "../../assets/portfolio/Home.png";
import agency from "../../assets/portfolio/itAgency.png";
import gadgetEuropa from "../../assets/portfolio/GadgetEuropa.png";
import honda from "../../assets/portfolio/honda.png";
import kitty from "../../assets/portfolio/kitty.png";
import car from "../../assets/portfolio/car.png";
import nikah from "../../assets/portfolio/nikah.png";
import laptop from "../../assets/portfolio/laptop.png";
import moneyMaster from "../../assets/portfolio/bk-money.png";
import travelive from "../../assets/portfolio/travilve.png";
import "./Portfolio.css";

const Portfolio = () => {
    const [data] = useState([
        {
            img: mastermall,
            Aos: "slide-right",
            title: " MasterMall",
            liveSite: "https://master-mall-bk.netlify.app/",
            clientCode: "https://github.com/khadiza21/MasterMall.git",
            serverCode: "",
            frontend: " HTML, CSS, JS, Swiper JS, ScrollReveal",
            backend: " Not any backend.",
        },
        {
            img: foodieland,
            aos: "zoom-in",
            title: " FoodieLand",
            liveSite: "https://foodielandbk.netlify.app/",
            clientCode: "https://github.com/khadiza21/foodieLandBk.git",
            serverCode: "",
            frontend: "  React JS, Router, Tailwind CSS, Toastify, Slick-carousel, Swiper, EmailjS, Daisy UI",
            backend: " Not any backend.",
        },
        {
            img: cipher,
            aos: "slide-left",
            title: "Cipher Test",
            liveSite: "https://cipher-khadiza.netlify.app/",
            clientCode: "https://github.com/khadiza21/cyber_ksa.git",
            serverCode: "",
            frontend: " HTML, CSS , JS",
            backend: " Not any backend.",
        },
        {
            img: home,
            aos: "fade-up",
            title: "Landing Page",
            liveSite: "https://khadiza21.github.io/home-A2/",
            clientCode: "https://github.com/khadiza21/home-A2.git",
            serverCode: "",
            frontend: " HTML, CSS, Tailwind CSS",
            backend: " Not any backend.",
        },
        {
            img: gadget,
            aos: "fade-down",
            title: " Gadget Heaven",
            liveSite: "https://dapper-taffy-4a1650.netlify.app/",
            clientCode: "https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-khadiza21.git",
            serverCode: "",
            frontend: " React Components, React Router, React-Bootstrap, NPM Packages, Context API",
            backend: " Not any backend.",
        },
        {
            img: travel,
            aos: "fade-up",
            title: "EchoAdventure",
            liveSite: "https://ecoadventures-3e0fa.web.app/",
            clientCode: "https://github.com/khadiza21/Echo-Adventure.git",
            serverCode: "",
            frontend: "React JS, React Bootstrap, Firebase Auth, React Router, AOS, React-Animated-CSS",
            backend: " Not any backend.",
        },
        {
            img: noorflix,
            aos: "fade-up",
            title: "NoorFlix",
            liveSite: "https://noorflix.netlify.app/",
            clientCode: "https://github.com/khadiza21/NoorFlix-client.git",
            serverCode: "https://github.com/khadiza21/noorflix-s",
            frontend: "React JS, React-Bootstrap, Daisy Ui, Firebase Authentication, Context API",
            backend: "Node JS, Express JS, MongoDB",
        },
        {
            img: transport,
            aos: "fade-up",
            title: "Transport In Area",
            liveSite: "https://transport-female-application.web.app/",
            clientCode: "https://github.com/khadiza21/transport_application.git",
            serverCode: "https://github.com/khadiza21/transport_Server2.git",
            frontend: "React JS , Router, Tailwind CSS, Daisy UI, Email JS, Axios, Leaflet, SweetAlert2",
            backend: "Express JS, Node JS, MongoDB, Cors, DotEnv, Nodemailer.",
        },
        {
            img: agency,
            aos: "fade-up",
            title: "IT Agency (Paid Client Work)",
            liveSite: "https://mellow-gecko-37f4a2.netlify.app/",
            clientCode: "",
            serverCode: "",
            frontend: "React JS , Swiper JS , Tailwind CSS",
            backend: " Not any backend.",
        },
         {
            img: gadgetEuropa,
            aos: "fade-up",
            title: "Gadget Europa - E-Commerce Website (Responsiveness Not Available)",
            liveSite: "https://animated-licorice-11121e.netlify.app/",
            clientCode: "https://github.com/khadiza21/Gadget-Europa.git",
            serverCode: "",
            frontend: "HTML,CSS,JS",
            backend: " Not any backend.",
        },
         {
            img: honda,
            aos: "fade-up",
            title: "Honda CBR(Landing Page)",
            liveSite: "https://clever-panini-4b1376.netlify.app/",
            clientCode: "",
            serverCode: "",
            frontend: "HTML, CSS, Bootstrap.",
            backend: " Not any backend.",
        },
         {
            img: car,
            aos: "fade-up",
            title: "CAR21 (Landing Page)",
            liveSite: "https://car-21-landing-page.netlify.app/",
            clientCode: "https://github.com/khadiza21/car-H-C-B.git",
            serverCode: "",
            frontend: "HTML, CSS, Bootstrap5",
            backend: " Not any backend.",
        },
         {
            img: nikah,
            aos: "fade-up",
            title: "NIKAH (Landing Page)",
            liveSite: "https://3-m-16-as-03-convention-center-btstrp.netlify.app/",
            clientCode: "https://github.com/khadiza21/convention-center-3-bootstrap.git",
            serverCode: "",
            frontend: "HTML, CSS, Bootstrap",
            backend: " Not any backend.",
        },
         {
            img: kitty,
            aos: "fade-up",
            title: "KITTY LAPTOP (Landing Page)",
            liveSite: "https://kitty-laptop-2022.netlify.app/",
            clientCode: "https://github.com/khadiza21/KITTY-Laptop-22.git",
            serverCode: "",
            frontend: "HTML, CSS, Bootstrap5",
            backend: " Not any backend.",
        },
         {
            img: laptop,
            aos: "fade-up",
            title: "BK Laptop",
            liveSite: "https://bk-laptop-analysis-react-router.netlify.app/",
            clientCode: "https://github.com/khadiza21/product-analysis-as-9.git",
            serverCode: "",
            frontend: "React JS, React-Bootstrap, Router DOM, Recharts, React-reveal",
            backend: " Not any backend.",
        },
         {
            img: travelive ,
            aos: "fade-up",
            title: "TRALIVE BK",
            liveSite: "https://tralive-bk-auth.netlify.app/",
            clientCode: "https://github.com/khadiza21/independent-service-provider-as-10.git",
            serverCode: "",
            frontend: "HTML5, CSS3, React JS, React-Router-Dom, React-Bootstrap, Firebase, React-Reveal, React-Toastify",
            backend: " Not any backend.",
        },
         {
            img: moneyMaster ,
            aos: "fade-up",
            title: "MONEY MASTER",
            liveSite: "https://quizzical-curie-9da98d.netlify.app/",
            clientCode: "https://github.com/khadiza21/-money-master-as-05.git",
            serverCode: "",
            frontend: "HTML, CSS, Bootstrap, JS(DOM)",
            backend: " Not any backend.",
        }
    ]);

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: "ease-in",
            delay: 25,
        });
    }, []);

    return (
        <div
            id="portfolio"
            className="container-fluid overflow-hidden "
            style={{ backgroundColor: "black" }}
        >
            <div className="container py-5 ">
                <h2
                    className="display-5 pb-4 text-primary text-center"
                    style={{ fontWeight: "600" }}
                >
                    <span className="text-light">My </span> Portfolio
                </h2>

                <div className="row py-4 w-full">
                    {data.map((item, index) => {
                        return (
                            <div
                                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                                key={index}
                                data-aos={item.aos}
                            >
                                <div
                                    className="my-3 border-0 border-bottom border-primary shadow-sm pt-2"
                                    style={{ width: "100%" }}
                                >
                                    <div className="image-wrap">
                                        <a href="">
                                            <img
                                                src={item.img}
                                                alt="No network"
                                                className="img-fluid rounded-3 "
                                            />
                                        </a>
                                    </div>

                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="text-light" style={{ fontWeight: "500" }}>
                                            {item.title}
                                        </p>
                                    </div>
                                    <div className="my-1">
                                        <div className="text-light">
                                            <h6>
                                                Frontend Technology: <span>{item.frontend}</span>
                                            </h6>
                                        </div>
                                        <div className="text-light">
                                            <h6>
                                                Backend Technology: <span>{item.backend}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="text-light">
                                            <span>Github: </span>

                                            {item.clientCode !== "" ? (
                                                <a
                                                    href={item.clientCode}
                                                    target="blank"
                                                    className="px-2 underline "
                                                >
                                                    Client
                                                </a>
                                            ) : (
                                                <span className="px-2 underline ">Client</span>
                                            )}

                                            {item.serverCode !== "" ? (
                                                <a
                                                    href={item.serverCode}
                                                    target="blank"
                                                    className="px-2 underline "
                                                >
                                                    Server
                                                </a>
                                            ) : (
                                                <span className="px-2 underline ">Server</span>
                                            )}
                                        </p>
                                        <a href={item.liveSite} target="blank">
                                            <p className="text-primary">Live Site</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
