import './hero.css';
import { BsGithub } from "react-icons/Bs";
import { BsLinkedin } from 'react-icons/Bs';
import { BsTwitter } from 'react-icons/Bs';
import aboutImg from '../../assets/about-img.jpg';
import  hero2  from '../../assets/hero-2.jpg';


const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-4">
                        <img src={hero2} width={400} alt="" className="hero-img" />
                    </div>
                    <div className="col-md-6 col-xl-6">
                        <div className="hero-text align-items-center justify-content-center p-4">
                            <p>Hello. I'm</p>
                            <h1>Ayendi Simeon</h1>
                            <h2>Backend Developer</h2>
                            <div className="hero-buttons">
                                <button className="btn btn-outline"><a className='nav-link' href="https://drive.google.com/file/d/1hdvpFvjTIRT_HCGtIuzkxDAr3n4MEqwM/view?usp=drive_link">Download CV</a> </button>
                                <button className="btn btn-primary">Contact Info</button>
                            </div>
                            <div className="hero-icons">
                                <a href="https://github.com/AyendiSimeon1"><span><BsGithub /> </span></a>
                                <a href="https://www.linkedin.com/in/simeon-ayendi/"> <span><BsLinkedin /></span></a>
                                <a href="https://twitter.com/mrayendi"><span><BsTwitter /></span></a>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <div className="container">
                    <p>Get to know me more.</p>
                    <h1 className="about-text">About Me</h1>
                    <div className="row">
                        
                            <div className="col-md-3">
                                <div className="about-img">
                                    <img src={aboutImg} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-card">
                                    
                                    <h2>Experience</h2>
                                    <p>5+ Years</p>
                                    <h5>Backend Developer</h5>
                                    <h2>Education</h2>
                                    <p>B.sc Bachelor's Degree </p>
                                    <h5>Human Anatomy (In View) </h5>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>

           <br />
           <br />
            <div className="experience-section">
                <div className="contaner">
                    <div className="row">
                        <p>Explore My</p>
                        <h2>Experience</h2>
                        <div className="col-md-4">
                                <h3>Frontend Development</h3>
                                <div className="skill-tab">
                                    
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>Bootstrap</p>
                                        <p> Javascript</p>
                                        <p>Sass</p>
                                        <p>React</p>
                                    
                                </div>
                                </div>
                        <div className="col-md-4">
                                    <h3>Backend Development</h3>
                                    <div className="skill-tab">
                                        <p>Python</p>
                                        <p>Django</p>
                                        <p>Node JS</p>
                                        <p>SQL</p>
                                        <p>Postgre</p>
                                        <p>Sass</p>
                                   
                            </div>
                      
                </div>
                </div>
            </div>
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="project-card">
                            <img src={aboutImg} alt="" />
                                <h3>Project 1</h3>
                                <div className="project-btn">
                                    <button className='btn btn-outline'>Github</button>
                                    <button className='btn btn-outline'>Live Demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-card">
                            <img src={aboutImg} alt="" />
                                <h3>Project 1</h3>
                                <div className="project-btn">
                                    <button className='btn btn-outline'>Github</button>
                                    <button className='btn btn-outline'>Live Demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-card">
                                <img src={aboutImg} alt="" />
                                <h3>Project 1</h3>
                                <div className="project-btn">
                                    <button className='btn btn-outline'>Github</button>
                                    <button className='btn btn-outline'>Live Demo</button>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact-card">
                                <p className="lead">Get In Touch</p>
                                <h2>Contact Me</h2>
                                <div className="contact-details">
                                    
                                    <span>ayendisimeon3@gmail.com</span>
                                    <span>+2349075754477</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero;