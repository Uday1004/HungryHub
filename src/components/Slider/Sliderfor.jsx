import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

import './main.css';


const Sliderfor = ({ title, desc, image }) => {

  const handleOrderNowClick = () => {
     
    const foodSection = document.getElementById('menuviews');
    if (foodSection) {
      foodSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Container className='box' style={{}}>
      <Row>
        <Col md={6}>
          <div>
            <h2 className='mx-4 title-head'>{title}</h2>
          </div>
          <p className='mx-4 desc' style={{marginTop:'10px'}}>{desc}</p>
        </Col>
        <Col md={5}>
          <img className='img' src={image} alt="#" />
        </Col>
      </Row>
          <button className='btn btn-primary mx-4 order-btn' onClick={handleOrderNowClick}>Order Now</button>


    </Container>

  )
}




export default Sliderfor