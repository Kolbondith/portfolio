import React from 'react';
import aboutImg from './img/aboutImg.jpg';
import './About.css'
import {Image} from 'react-bootstrap';
import { Link as Scroll } from 'react-scroll';

function About(){
    return (
        <div className="about component__space" id="About">
            <div className="container">
                <div className="rar">
                   
                    <div className="col__2">
                        <h1 className="about__heading">About Me</h1>
                        <div>
                            <p className="about__text p__color">
                               I'm a fullstack developer. I have 2 years experience with webapp development. 
                               I'm an openmind person. I used to do internship in Kirirom Institute of Technology.
                                I like to findout new idea to develop to make our society better.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="#">
                                    <button className="about btn pointer">Download Cv</button>
                                </a>
                                <Scroll to="Contact" href="">
                                    <button className="about btn pointer">Hire Me</button>
                                </Scroll>
                            </div>
                        </div>
                    </div>
                    <div className="col__2">
                        <Image className="about__img" src={aboutImg} alt="about" rounded  />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About