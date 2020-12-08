import React, { useState } from 'react';

import "./navbar.css";
import { MenuItems } from "../MenuItems";
// import {Button} from "../Button/Button.js";



const  Navbar = () =>{

  const [ clicked, setClicked ] = useState(false);

  const handleClick = () => {
    setClicked(true);
  }


  return (
    <nav className="navbar">
        <div><h1>LOGO</h1></div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}>

          </i>
        </div>

        <div className="itemContainer">
            <ul className={clicked ? 'nav-menu active' : 'nav-menu' }>

              {MenuItems.map((item, index) =>{
                return(
                  <li key={index}>
                    <a className={item.cName} href={item.url} >
                      {item.title}
                    </a>
                  </li>

                )
              })}

            </ul>
        </div>
    </nav>
  )

}

export default Navbar;
