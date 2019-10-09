import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sam from '../assets/Sam-Lea-website-doodle-5.svg'
import '../styles/Home.css';


const Styles = styled.div`
  .navbar {
    // background-color: #3B6250;
  }
  a, .navbar-nav .nav-link, .navbar-nav dropdown {
    color: white;
    font-size: 30px;
    &:hover {
      // color: lightgray;
    }
  }
`;



const myName = '{ Sam Lea }';

export const Home = () => (
  <>
    <Styles>
      <Container className="outer">

        {/* <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <h1 class="display-2 text-white font-weight-normal">{myName}</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}


        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <h1 class="display-2 text-white font-weight-normal">{myName}</h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span class="text-white">
              <i class="fa fa-bars fa-2x"></i>
            </span>
          </Navbar.Toggle>




          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <Nav.Item>
                <Nav.Link>
                  <Link to="/portfolio">Portfolio</Link>
                </Nav.Link>
              </Nav.Item>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link>
                  <Link to="/">About</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link>
                  <Link to="/contact">Contact</Link>
                </Nav.Link>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>

        </Navbar>


        {/* <Row className="row">
      <Col md={5} className="logo">
        <h1 class="display-2 text-white font-weight-normal">{myName}</h1>
      </Col>
      <Col md={7}>Menu</Col>
    </Row> */}



        <Row className="row">
          <Col md={7}>Display</Col>
          <Col md={5} className="picture">
            <img src={Sam} class="card-img-top img-fluid" />
          </Col>
        </Row>

      </Container>
    </Styles>
  </>
)

/*

 <h1 class="display-5 text-white samlea">{myName}</h1>
<img src={Sam} class="card-img-top img-fluid" />

  <Card className="user-info text-center">
          <Card.Img variant="top" src={man} fluid={true} className="user-avatar" />
          <Card.Body>
            <Card.Title>User Name</Card.Title>
            <Card.Text>
              Last logged in: 12-09-2019
              </Card.Text>
          </Card.Body>
        </Card>

        <Card className="user-info text-center">
          <Card.Body>
            <Card.Title>Card Title <Button variant="primary">Go somewhere</Button> </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              </Card.Text>

          </Card.Body>
        </Card>

*/