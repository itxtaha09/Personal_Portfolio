import { useState, useEffect } from "react";
// import { nav, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <nav expand="lg" className={scrolled ? "scrolled" : ""}>
            <div>
                <nav href="#home">
                    <img src={logo} alt="logo" />
                </nav>
                <nav aria-controls="basic-nav-nav">
                    <span className="nav-toggler-icon"></span>
                </nav>
                <nav id="basic-nav-nav">
                    <nav className="me-auto">
                        <nav href="#home" className={activeLink === 'home' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('home')}>Home</nav>
                        <nav href="#skills" className={activeLink === 'skills' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</nav>
                        <nav href="#projects" className={activeLink === 'projects' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</nav>
                    </nav>
                    <span className="nav-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>

                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </nav>
            </div>
        </nav>
    )
};