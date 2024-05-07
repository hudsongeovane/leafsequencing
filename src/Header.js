import React from 'react';
import icon from './images/icon.png'

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='firsthalf'>
          <div><a href='#'><img src={icon} width='60' alt='icon'></img></a></div>
          <div className='headerbutton'><a href='#'>Leaf Sequencing</a></div>
        </div>
        <div className='secondhalf'>
          <div className='headerbutton'><a href="#">Formal Definition</a></div>
          <div className='headerbutton'><a href="#">Algorithms</a></div>
          <div className='headerbutton'><a href="#">About</a></div>
        </div>
      </div>
    );
  }
}

export default Header;
