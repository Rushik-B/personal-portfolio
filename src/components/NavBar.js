import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Placeholder } from "react-bootstrap";
import logo from '../assets/img/IMG_0128-removebg-preview.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import ResumePlaceholder from '../assets/img/Resume-Placeholder.pdf';


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
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} 
            alt="Logo"
            style={{ 
              width: '130px', 
              height: '175px',
              transform: 'rotate(50deg)',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease-in-out',
              ':hover': {
                transform: 'rotate(55deg)' // adds 5 degrees on hover
              }
            }}
            />  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link 
                href={ResumePlaceholder} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`nav-link navbar-link ${activeLink === 'resume' ? 'active' : ''}`} 
                onClick={() => onUpdateActiveLink('resume')}
              >
                Resume
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a 
                  href="https://www.linkedin.com/in/rushik-behal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a 
                  href="https://github.com/Rushik-B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a 
                  href="https://www.x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Hire Me!</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
