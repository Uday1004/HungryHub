import React from "react";
// import './App.css';
import logo from "../../Images/applogo.jpg";
import logo1 from "../../Images/dev.png";
import cup from "../../Images/cup.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../About/About.css";

function App() {
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Your Company</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar> */}

      <section id="about" className="about">
        <Container>
          <Row>
            <Col>
              <h1>Who We Are ?</h1>
              <p>
                Welcome to our Website! We are a passionate team of
                professionals dedicated to providing exceptional
                services/products to our customers.
              </p>
            </Col>
            <Col>
              <div className="d-flex flex-wrap">
                <img src={logo} alt="Logo" className="img-fluid img-about logo" />
                {/* <h1 className='title'>HungryHub</h1> */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "20px" }}>
              <h1>Ambition</h1>
              <p>
                <span
                  style={{
                    color: "purple",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Hello Users<span className="wave">👋</span>
                </span>
                ...We take pride in offering a multitude of exceptional
                facilities to enhance your online food delivery experience. Our
                user-friendly website is designed for effortless navigation,
                ensuring you can explore a vast array of culinary delights with
                ease. Discover an extensive menu featuring diverse cuisines,
                from mouthwatering classics to trendy fusion dishes. With our
                secure and efficient online ordering system, you can place your
                food orders swiftly and conveniently. We prioritize your
                satisfaction by maintaining rigorous quality standards and
                ensuring prompt, reliable deliveries. Ambition is more than just
                a food delivery service; it's your gateway to a world of
                culinary delights delivered right to your doorstep. Explore the
                possibilities with Ambition today!
              </p>
            </Col>
            <Col>
              <div className="d-flex flex-wrap">
                <img src={cup} alt="Logo" className=" img-about cup" />
                {/* <h1 className='title'>HungryHub</h1> */}
              </div>
            </Col>
          </Row>

          <Col class="facility-list" style={{ marginTop: "20px" }}>
            <div class="facility-item">
              <h1>Facilities</h1>
              <h5>Wide Menu Selection</h5>
              <p>
                Discover a diverse range of cuisines and dishes to suit every
                taste bud.
              </p>
            </div>

            <div class="facility-item">
              <h5>Quality Assurance</h5>
              <p>
                Our team of dedicated chefs ensures that each dish meets the
                highest quality standards.
              </p>
            </div>

            <div class="facility-item">
              <h5>Swift and Reliable Delivery</h5>
              <p>
                We guarantee on-time delivery, so your food arrives fresh and
                hot.
              </p>
            </div>
          </Col>
          <Col style={{marginTop:'20px'}}>
          <h1>Developers &lt;/&gt;</h1>
          <div style={{marginTop:'2rem'}}>
           
           <div className="d-flex">

          <div class="card">
        <img src={logo1} alt=""/>
        <h5>Uday Solanki</h5>
        <p>Fullstack Developer</p>
        <p><a href="mailto:udaysolanki530@gmail.com" className="mail">Mail Us</a></p>
    </div>
          <div class="card">
        <img src={logo1} alt=""/>
        <h5>Sandeep Prajapati</h5>
        <p>Fullstack Developer</p>
        <p><a href="mailto:udaysolanki530@gmail.com" className="mail">Mail Us</a></p>
    </div>
           </div>


          </div>
          </Col>
        </Container>
      </section>
    </div>
  );
}

export default App;
