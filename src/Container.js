import React from 'react';
import Header from './Header';
import Content from './Content';
import './Content.css';
import './Header.css';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default Container;
