import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='firsthalf'>
        <div className='headerbutton'>Leaf Sequencing</div>
        </div>
        <div className='secondhalf'>
          <div className='headerbutton'>Formal Definition</div>
          <div className='headerbutton'>Algorithms</div>
          <div className='headerbutton'>About</div>
        </div>
      </div>
    );
  }
}

export default Header;
