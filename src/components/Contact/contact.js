import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
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
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">I have had the opportunity to eork with a diverse group of companies.
                some of the notable companies I have worked with includes.</p>
                <div className="clientImgs">
                    <img src={Walmart} alt="clients" className="clientImg"/>
                    <img src={Adobe} alt="clients" className="clientImg"/>
                    <img src={Microsoft} alt="clients" className="clientImg"/>
                    <img src={Facebook} alt="clients" className="clientImg"/>
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