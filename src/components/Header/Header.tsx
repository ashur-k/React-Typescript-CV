import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { NavLink, withRouter } from 'react-router-dom';

import { HomeRounded, Telegram } from '@material-ui/icons';


import CustomButton from '../Button/Button';
import './Header.css';
import { socials } from '../../utils/resumeData';
import  getIcon  from '../../helperFunctions/getIcon';


const Header = (props:any) => {
  
  const pathName =props?.location?.pathname;

  

  return (
    <Navbar expand="lg" sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse className="navbar_collapse">
        <Nav className='header_left'>
          <Nav.Link 
            as={NavLink} 
            to='/'
            className={pathName === "/" ? "header_link_active" : "header_link"}
            >
            Resume
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to='/portfolio'
            className={pathName === "/portfolio" ? "header_link_active" : "header_link"}
            >
            Portfolio
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to='/blog'
            className={pathName === "/blog" ? "header_link_active" : "header_link"}
            >
            Blog
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to='/contact'
            className={pathName === "/contact" ? "header_link_active" : "header_link"}
            >
            Contact
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          { 
            socials.map((social) => (
              <a 
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
              >{getIcon(social.icon)}</a>
           ))}

          <CustomButton text={'Hire me'} icon={ <Telegram />} />             
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);