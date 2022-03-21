import React from 'react';
import aboutImg from './img/aboutImg.jpg';
import './About.css'
import {Image} from 'react-bootstrap';

function About(){
    return (
        <div className="about component__space" id="About">
            <div className="container">
                <div className="rar">
                    <div className="col__2">
                        <Image src={aboutImg} alt="about" rounded style={{width:'70%', height:'20%'}} />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">About Me</h1>
                        <div>
                            <p className="about__text p__color">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered in some form, by injected humour,
                                or randomised words which dont look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum,
                            </p>
                            <p className="about__text p__color">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered in some form, by injected humour,
                                or randomised words which dont look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum,
                            </p>
                            <p className="about__text p__color">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered in some form, by injected humour,
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="#">
                                    <button className="about btn pointer">Download Cv</button>
                                </a>
                                <a href="#">
                                    <button className="about btn pointer">Hire Me</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About