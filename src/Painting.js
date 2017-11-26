import React, { Component } from 'react';
import './Painting.css';

// basics
import Day from './layers/Day';
import Night from './layers/Night';
import Lights from './layers/Lights';

// scribbles
import Cut from './layers/Cut';

class Painting extends Component 
{
  render() {
    return (
      <div className="Painting">
        <Day />
        <Night />
        <Lights />
        <Cut />
      </div>
    );
  }
}

export default Painting;
