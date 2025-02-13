import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const NavBar = () => {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Autenticación</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {!auth && (
              <Nav.Link as={Link} to="/login">
                Inicia sesión
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/signup">
                Registrate
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {auth && (
              <Nav.Link as={Button} onClick={handleLogout}>
                LogOut
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
