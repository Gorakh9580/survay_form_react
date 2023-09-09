import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import {
    MDBIcon,
  } from 'mdb-react-ui-kit';
import { Nav } from 'react-bootstrap';

const NavbarS = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
          <Navbar.Brand href='/'>
           <img
            src='https://th.bing.com/th/id/OIP.VhuG1kkUo_CHRF6Eqr7GfAHaHa?pid=ImgDet&w=169&h=169&c=7&dpr=1.4'
            alt='imgage'
            style={{ width: '90px', height: '60px' }}
            className='rounded-circle'
          />
          </Navbar.Brand>
          <Navbar.Brand href="/">Survay.com</Navbar.Brand>
          <Navbar.Toggle aria-controls='Responsive-navbar-nav'>
            <MDBIcon icon='bars' fas />
          </Navbar.Toggle>
          <Navbar.Collapse id='Responsive-navbar-nav'>
            <Nav className='me-auto'>
                <Nav.Link aria-current='page' href='/'>Home</Nav.Link>
                <Nav.Link href='/read'>Read</Nav.Link>
                <Nav.Link href='/update'>Update</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
          </Navbar.Collapse>
      </Navbar>


      

    </>
  )
}

export default NavbarS;