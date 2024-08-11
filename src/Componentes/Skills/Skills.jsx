import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import boot from '../../assets/skills/boot.png';
import js from '../../assets/skills/js.png';
import react from '../../assets/skills/react.png';
import node from '../../assets/skills/node.png';
import db from '../../assets/skills/db.png';
import tailwind from '../../assets/skills/tailwind.png';
import git from '../../assets/skills/git.png';
import express from '../../assets/skills/express.png';
import { Container } from 'react-bootstrap';
const Skills = () => {


    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in',
            delay: 25,
        });
    }, []);

    let progress = [
        {
            title: 'HTML5',
            percentage: '90',
            img: html,
            aos: 'slide-right',
        },
        {
            title: 'CSS',
            percentage: '85',
            img: css,
            aos: 'fade-up',
        },
        {
            title: 'Bootstrap5',
            percentage: '75',
            img: boot,
            aos: 'fade-down',
        },
        {
            title: 'Tailwind',
            percentage: '75',
            img: tailwind,
            aos: 'fade-up',
        },
        {
            title: 'javaScript',
            percentage: '60',
            img: js,
            aos: 'zoom-in',
        },
        {
            title: 'React Js',
            percentage: '70',
            img: react,
            aos: 'flip-left',
        },
        {
            title: 'Node Js',
            percentage: '60',
            img: node,
            aos: 'zoom-in',
        },
        {
            title: 'MongoDb',
            percentage: '50',
            img: db,
            aos: 'fade-left',

        },
        {
            title: 'Express JS',
            percentage: '50',
            img: express,
            aos: 'zoom-in',

        },
        {
            title: 'Git',
            percentage: '50',
            img: git,
            aos: 'fade-right',
        }
    ];


    return (
        <div>

            <div className='p-0 overflow-hidden'  style={{ backgroundColor: "black" }}> 
                 <Container>
                <div className=' py-5'>
                    <h2 className="display-5 pb-4 text-primary text-center" style={{ fontWeight: "600" }}>
                        <span className='text-light'>My</span> Skills
                    </h2>
                    <div className='row mx-3'>
                        {progress.map((data, index) => {
                            return <div className='mx-auto   col-lg-3 col-md-4 col-sm-6  my-5 mx-3 mx-5 ' data-aos={data.aos} key={index}>
                                <div className='card card1 border-0 border-bottom border-primary shadow-sm'>
                                    <img src={data.img} alt="" />
                                <p className='text-light text-center pt-3 m-0'>{data.title}</p>  
                                </div>
                              
                            </div>
                        })

                        }
                    </div>
                </div></Container>
            </div>
        </div>
    );
};

export default Skills;