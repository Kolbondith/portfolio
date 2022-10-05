import React from 'react';
import './Service.css';
import { FaDev } from "react-icons/fa";

function Service(){
    return(
        <div className="service__bg component__space" id="Services">

            <div className="heading">
                <h1 className="heading">My Service For You</h1>
            </div>

            <div className="container">
                <div className="rar">
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <FaDev />
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Backend Development</h1>
                                <p className="p service__text p__color">
                                   I can use Django to create api  to interract with frontend smoothly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                            </div>
                        <div className="service__meta">
                            <h1 className="service__text">Frontend Development</h1>
                            <p className="p service__text p__color">
                                I can create webapp using React Html Css and JavaScript.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Service