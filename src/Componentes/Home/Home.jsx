import React from 'react';
import Navbarr from '../Header/Navbarr';
import Banner from '../Header/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
         
        
        <Navbarr></Navbarr>
        <Banner></Banner>
        <About></About>
        <Skills ></Skills>
        <Portfolio></Portfolio>
        <Footer></Footer>
      
        </div>
    );
};

export default Home;