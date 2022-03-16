import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">Chi sono</a>
            <a href="#">Contatti</a>
        </nav>
        <div>
            socila Media links
        </div>
    </header>
   )

 }

export default Header