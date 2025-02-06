import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const toRotate = [
    "Rushik.",
    "a Computer Science Student.",
    "a Programmer.",
    "a Web Developer.",
    "a Problem Solver."
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(1000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setPosition({
      x: (x - centerX) / 15,
      y: (y - centerY) / 15
    });
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    {"Hi! I'm"}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="100"
                      
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  
                  <div style={{ height: '50px' }}></div>  {/*Empty div as spacer */}

                  <p>
                  Aspiring software developer with a strong foundation in coding, problem-solving, and 
                  web technologies. Looking for opportunities to apply my skills in real-world projects and 
                  internships.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's Connect! <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col 
            xs={12} 
            md={6} 
            xl={5}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setPosition({ x: 0, y: 0 });
            }}
          >
            <div className="banner-image-container">
            <img 
              src={require("../assets/img/IMG_63C98045A56D-1.jpeg")} 
              alt="Profile"
              className="banner-image egg-shape"
              style={{
                width: '300px',    
                height: '300px',
                
                transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 1.05 : 1})`,
                transition: isHovering ? 'transform 0.1s linear' : 'transform 0.3s ease-out'
              }}
            />
            </div>
            <div style={{ height: '100px' }}></div>  {/*Empty div as spacer */}


          </Col>
        </Row>
      </Container>
    </section>
  );
};
