import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Placeholder",
      description: "Loreum Ipseum......",
      imgUrl: projImg1,
    },
    {
      title: "Placeholder",
      description: "Loreum Ipseum......",
      imgUrl: projImg2,
    },
    {
      title: "Placeholder",
      description: "Loreum Ipseum......",
      imgUrl: projImg3,
    },
    {
      title: "Placeholder",
      description: "Loreum Ipseum......",
      imgUrl: projImg1,
    },
    {
      title: "Placeholder",
      description: "Loreum Ipseum......",
      imgUrl: projImg2,
    },
    {
      title: "Placeholder",
      description: "Loreum Ipseum......",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A collection of projects where I've applied technologies like JavaScript, React, Node.js, and more. 
                  From front-end designs to full-stack applications, these projects highlight my technical skills and creative problem-solving abilities.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>    
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
