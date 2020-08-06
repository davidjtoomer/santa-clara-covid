import React from 'react';
import NavbarButton from './NavbarButton';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-text'>
        <h5>Santa Clara County</h5>
        <h6>Visualizing Real-Time COVID-19 Statistics</h6>
      </div>
      <div className='navbar-links'>
        <NavbarButton
          text = 'About' 
          href = '#statistics'
        />
        <NavbarButton
          text = 'Data' 
          href = 'https://data.ca.gov/dataset/covid-19-cases'
          target = '_blank'
        />
        <NavbarButton
          text = 'Source Code'
          href = 'https://github.com/davidjtoomer/santa-clara-covid'
          target = '_blank'
        />
      </div>
    </div>
  );
};

export default Navbar;