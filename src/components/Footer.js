import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/IMG_0128-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} 
            alt="Logo"
            style={{ 
              width: '130px', 
              height: '170px',     
              transform: 'rotate(50deg)',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease-in-out',
              }
            }
             
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
                href= "https://www.x.com"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>© 2024 Rushik Behal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}







