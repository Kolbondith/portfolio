import React from 'react';
import './Contact.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa'
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+855 12 624 966</strong> or email <strong>kolbondithdoung@gmail.com</strong></p>
                        </div>
                        <div className="rar">
                            <div className="facebook">
                                <a href="https://www.facebook.com/doung.kolbondith"><FaFacebookSquare /></a>
                                
                            </div>
                            <div className="facebook">
                                <a href="https://t.me/Kolbondith"><FaTelegram /></a>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact
