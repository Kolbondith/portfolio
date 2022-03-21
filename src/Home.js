import React, {useState} from "react";
import "./Home.css";
import logo from './img/logo.png';
import images from './img/images.jpg'
import {Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Typical from 'react-typical';
import Header from "./Header";


function Home(){
    return (
    <div className="home" id="Home">
        <div className="home__bg">
            <Header />
            <div className="container">
            <div className="home__content">
                <div>
                <div className="text-center py-5">
                    <Image src={images} rounded roundedCircle/>
                </div>
                <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
                <h2 className="home__text pz__10">Hi, I’m Doung Kolbondith</h2>
                <h3 className="home__text pz__10">I'm a {' '}
                    <Typical 
                        loop={Infinity} 
                        wrapper="b"
                        steps={[
                            'Backend Developer',
                            1000,
                            'Frontend Developer',
                            1000,
                            'Video Editor',
                            1000,
                            'Youtuber',
                            1000,
                        ]}                  
                    />
                </h3>
                <h4 className="home__text pz__10">Work Hard { ' >'} Luck</h4>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    )
    
}

export default Home;