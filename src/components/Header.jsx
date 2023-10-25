import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , NavLink } from 'react-router-dom';
import logo from "../assets/img/logo.svg"

export const Header = () => {
  return (
    <Navbar expand="lg" className="shadow">
    <Container>
      <Link to="/" className='navbar-brand'>
        <img src={logo} alt="movie_logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/" className='nav-link'>Home</NavLink>
          <NavLink to="/movies" className='nav-link'>Movies</NavLink>
          <NavLink to="/tv-shows" className='nav-link'>Tv Shows</NavLink>
          <NavLink to="/celebs" className='nav-link'>Celebs</NavLink>
          <NavLink to="/blog" className='nav-link'>Blog</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
