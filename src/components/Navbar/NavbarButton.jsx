import React from 'react';

const NavbarButton = (props) => (
  <div className='navbar-button'>
    <a href={props.href} target={props.target}>
      <button>{props.text}</button>
    </a>
  </div>
)

export default NavbarButton;