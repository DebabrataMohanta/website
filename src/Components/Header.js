import {Container,Nav,Navbar} from 'react-bootstrap';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Blog from './Blog';


function Header() {
    return (
      <BrowserRouter>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link  as={Link} to="/home">Home</Nav.Link>
              <Nav.Link  as={Link} to="/about">About</Nav.Link>
              <Nav.Link  as={Link} to="/contact" >Contact</Nav.Link>
              <Nav.Link  as={Link} to="/service">Service</Nav.Link>
              <Nav.Link  as={Link} to="/blog" >Blog</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <div>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </div>
  </BrowserRouter>

    );
  }
  
  export default Header;
  