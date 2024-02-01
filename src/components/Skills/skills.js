import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

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
                        <p>Talented and innovative Web Designer with 4 years of experience creating visually stunning and user-friendly websites.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Front-end Developer</h2>
                        <p>Skilled Front-end Developer with 4 years of experience in designing, developing and maintaining front-end web applications</p>
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