import React from 'react';
import './Footer.css';
import face from "./assets/facebooklogo.png";
import insta from "./assets/instagramlogo.png";
import whats from "./assets/whatsapplogo.png";
import phn from "./assets/phoneicon.png";
import mail from "./assets/emailicon.png";
const Footer: React.FC = () => {
    return (
        <footer className="footer-main">
            <div className="footer-container-main">
                <div className="footer-section-main social-main">
                    <h3>Social Network</h3>
                    <div className="social-icons-main">
                        <a href="https://www.facebook.com/" target="_blank"><img src={face} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src={insta} alt="Instagram" /></a>
                        <a href="https://web.whatsapp.com/" target="_blank"><img src={whats} alt="WhatsApp" /></a>
                    </div>
                </div>
                <div className="footer-section-main contact-main">
                    <h3>Contact Us</h3>
                    <p><img src={phn} alt="Phone" /> Emergency Contact.No.982000000</p>
                    <p><img src={mail} alt="Email" /> carrental123@gmail.com</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
