import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="app">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <a href="/">
              <img src="./logo192.png" alt="logo" height="50" />
            </a>
            Galsen Linguère
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Card className=" mt-5 d-flex flex-row ">
          <Card className="m-auto" border="primary" style={{ width: "18rem" }}>
            <Card.Header>Product</Card.Header>
            <Card.Body>
              <Card.Title>Shampoo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="m-auto" border="success" style={{ width: "18rem" }}>
            <Card.Header>Product</Card.Header>
            <Card.Body>
              <Card.Title>Moisturizing Cream</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="m-auto" border="danger" style={{ width: "18rem" }}>
            <Card.Header>Product</Card.Header>
            <Card.Body>
              <Card.Title>Hair Mask</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Card>
      </div>
    </div>
  );
}
export default App;
