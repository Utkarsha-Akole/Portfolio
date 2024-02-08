import React, { useRef } from "react";
import './contact.css';
import PortfolioImg from '../../assets/portfolio.png';
import Ecommerce from '../../assets/ecommerce.jpg';
import Invitation from '../../assets/invitation.jpg';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f3au9uc', 'template_ijvq8ha', form.current, 'uATXXCo-l0-fhmxEp9zMC')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')
          }, (error) => {
              console.log(error.text);
          });
        };
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Projects</h1>
                <p className="clientDesc">I have work on the various projects.<br></br>
                some of the notable projects I have worked on includes.</p>
                <div className="clientImgs">
                    <img src={PortfolioImg} alt="clients" className="clientImg"/>
                    <img src={Ecommerce} alt="clients" className="clientImg"/>
                    <img src={Invitation} alt="clients" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" rows="5" placeholder="Your Message" name="message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links"> 
                        <img src={FacebookIcon} alt="facebook" className="link"/>
                        <img src={TwitterIcon} alt="twitter" className="link"/>
                        <img src={YouTubeIcon} alt="youtube" className="link"/>
                        <img src={InstagramIcon} alt="instagram" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;