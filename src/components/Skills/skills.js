import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import ReactDev from '../../assets/react_dev.png'

const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a skilled and passionate designer with experience in creating visually appealing and user-friendly websites.I have strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Designer</h2>
                        <p>As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Front-end Developer</h2>
                        <p> Innovative and detail-oriented Experienced Front End Developer with a passion for creating responsive and user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on emerging technologies.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ReactDev} alt="ReactDev" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>ReactJs Developer</h2>
                        <p> Innovative and detail-oriented Experienced Front End Developer with a passion for creating responsive and user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on emerging technologies.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Designing strategies on the insights of real users and data and turn these insights into beautifully designed experiences across products and emerging platforms.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;