import React, { useState } from 'react';
// import { Navbar, NavDropdown } "react-bootstrap";
import "./navbar.css";
// import { Navbar , NavDropdown } from 'react-bootstrap';



const  Nav = () => {
  // const [responsive, setResponsive] = useState(0);

  return (
    <div className="navbar">
        <div>LOGO</div>

        <div className="itemContainer">
            <ul className="navItems">
                <li className="listItem">Home</li>
                <li className="listItem">About</li>
                <li className="listItem">Skills</li>
                <li className="listItem">Experiences</li>
                <li className="listItem">Portfolio</li>
                <li className="listItem">Pricing</li>
                <li className="listItem">Blog</li>
                <li className="listItem">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav;
