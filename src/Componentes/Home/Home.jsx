import React from 'react';
import Navbarr from '../Header/Navbarr';
import Banner from '../Header/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
         
        
        <Navbarr></Navbarr>
        <Banner></Banner>
        <About></About>
        <Skills ></Skills>
        <Footer></Footer>
      
        </div>
    );
};

export default Home;