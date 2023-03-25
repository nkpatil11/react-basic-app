import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export function NavBar() {
  return (
    <Navbar bg="light " expand="lg">
      <Container>
        <Navbar.Brand href="#home">Product App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/add-product'>
              <Nav.Link>Add Product</Nav.Link>
            </LinkContainer >
            <LinkContainer to='/products-list'>
              <Nav.Link>View Product</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
