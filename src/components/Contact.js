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
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    // Create a FormData object and append all form fields
    const data = new FormData();
    for (const key in formDetails) {
      data.append(key, formDetails[key]);
    }
    // Append your Web3Forms access key (replace with your actual key)
    data.append("access_key", "9ae8d6c1-a49d-4c77-9221-669f0a7f3afb");

    try {
      // Post the form data to Web3Forms API
      let response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      let result = await response.json();
      
      if (result.success) {
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails(formInitialDetails); // Reset form fields
      } else {
        setStatus({ 
          success: false, 
          message: result.message || 'Something went wrong, please try again later.' 
        });
      }
    } catch (error) {
      setStatus({ 
        success: false, 
        message: 'Network error, please check your connection' 
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-start justify-content-between">
          <Col md={5}>
            <div className="contact-text">
              <h2 style={{ 
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                Let's Connect!
              </h2>
              <div style={{ height: '30px' }}></div>
              <p className="message-text">
                I'm always open to new opportunities and happy to connect. If you have a question or just want to reach out,
                feel free to send a message—I'll do my best to reply as soon as possible :)
              </p>
              <div className="contact-info">
                <p>Burnaby, BC, CA</p>
                <p>rba137@sfu.ca</p>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName}
                          placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.lastName}
                          placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email}
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="tel" 
                          value={formDetails.phone}
                          placeholder="Phone Number"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "text-success" : "text-danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
