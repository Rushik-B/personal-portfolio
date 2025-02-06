import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-start justify-content-between">
          {/* Left side text */}
          <Col md={5}>
            <div className="contact-text">
              <h2 style={{ 
                fontWeight: 'bold',
                marginBottom: '20px'  // Adds space between heading and paragraph
              }}>
                Let's Connect!
              </h2>
              <div style={{ height: '30px' }}></div>  {/*Empty div as spacer */}
              <p className="message-text">
                I'm always open to new opportunities and happy to connect. If you have a question or just want to reach out, feel free to send a message—I'll do my best to reply as soon as possible :)
              </p>
              <div className="contact-info">
                <p>Burnaby, BC, CA</p>
                <p>rba137@sfu.ca</p>
              </div>
            </div>
          </Col>

          {/* Right side form */}
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="form-control"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <input 
                    type="email" 
                    placeholder="yourname@email.com"
                    className="form-control"
                  />
                </Col>
                <Col md={12}>
                  <textarea 
                    placeholder="Message..."
                    className="form-control"
                    rows={6}
                  />
                </Col>
                <Col md={12} className="mt-3">
                  <button type="submit" className="send-button">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
