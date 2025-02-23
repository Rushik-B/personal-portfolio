// Projects.js
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Project",
      description: "Made a personal portfolio website using React, React-bootstrap and Animate.css",
      imgUrl: projImg1,
      projectUrl: "https://github.com/Rushik-B/personal-portfolio" 
    },
    {
      title: "Animated Flowers",
      description: "Used HTML and CSS to design and animate the growing flowers",
      imgUrl: projImg2,
      projectUrl: "https://github.com/Rushik-B/flowers" 
    },
    {
      title: "Vacuum Cleaner Pathfinding Simulation",
      description: "A Python-based AI agent that navigates a grid to clean dirt using A*, Greedy, BFS, DFS, UCS, and custom movement heuristics.",
      imgUrl: projImg3,
      projectUrl: "https://github.com/Rushik-B/Vaccum-cleaner-agent"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>A collection of projects where I've applied technologies like JavaScript, React, Node.js, and more. From front-end designs to full-stack applications, these projects highlight my technical skills and creative problem-solving abilities.</p>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};