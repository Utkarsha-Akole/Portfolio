import React from "react";
import './intro.css';
import bg from '../../assets/image1.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Utkarsha</span><br/>Website Designer</span>
                <p className="introPara">Beginner Full stack developer looking for an opportunity in web <br/> development. Highly poised and dedicated with a strong education in <br/> design principles and programming languages. Eager to learn and grow.</p>
                <Link><button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;