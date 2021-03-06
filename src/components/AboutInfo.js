import React from 'react'
import { Col, Image, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router';
//import mage from '../assets/images/typing1.jpg'
import mage from '../assets/images/elee-logo.png'
const style = {
  color: 'black',
  opacity: "0.8",
  backgroundColor: '#fff',
  padding: '1em'
/*  backgroundImage: 'url(' + imgUrl + ')',  */
};

function AboutInfo() {

  return(
    <Row>
    <Col xs={12} md={3}>
        <Image src={mage} thumbnail />
      </Col>

      <Col xs={12} md={6} className="text-justify" style={style}>
      <h3> About Eleete </h3>
      <p>
      Eleete is an established recruitment firm providing services across Recruitment, Recruitment Process Outsourcing and Talent Management to top-tier organisations looking for mid to senior level professionals.
      </p>
      <p>
      We are a forward looking company with managers of over 20 years experience in the industry and we motivate our staff to provide services to the best of their abilities.
      </p>
      <p>
      With our global reach and world-class assessment tools, we have access to an extensive network of specialist professionals both locally and globally. Our accredited psychometric tests allow us to match candidates who have not only the right skills, but also those who have the right motivational and career fit to align with your company, culture and goals.
      </p>
      <p>
      As a talent solutions company, we pride ourselves on connecting clients with the best talent in a diverse range of industries. As specialists in recruitment, we know how to find the best people for hard-to-fill roles, and we do it quickly.
      </p>
      <p>
      Contact us today and find out more about how we can meet your organisations talent needs or enhance your own career.
      </p>
      <Link to='/contact'>
       <Button bsStyle="primary">Contact Us </Button>
      </Link>
      </Col>
    </Row>

)
};

export default AboutInfo
