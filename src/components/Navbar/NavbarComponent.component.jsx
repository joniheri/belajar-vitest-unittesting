import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar expand="md" className="bg-body-tertiary border-bottom">
      <Container fluid>
        <Navbar.Brand href="#home">Belajar Unit Testing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              align={{ lg: "end" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link kjssad aksdksafd asf askdfsafd khaksfd
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
