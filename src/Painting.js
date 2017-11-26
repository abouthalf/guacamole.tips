import React, { Component } from 'react';
import './Painting.css';

import _ from 'lodash';

// basics
import Day from './layers/Day';
import Night from './layers/Night';
import Lights from './layers/Lights';

// scribbles
import Cut from './layers/Cut';
import Good from './layers/Good';
import Microwave from './layers/Microwave';
import Ripen from './layers/Ripen';

class Painting extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      scribbles: [false, true, true, true]
    };
  }
  handleAnimationIteration = (event) => {
    // shuffle 
    let state = {
      scribbles: _.shuffle(this.state.scribbles)
    }
    this.setState(state);
    // console.log(event.elapsedTime);
  }
  render() {
    return (
      <div className="Painting">
        <Day />
        <Night handleAnimationIteration={this.handleAnimationIteration} />
        <Lights />
        <Cut hide={this.state.scribbles[0]}/>
        <Good hide={this.state.scribbles[1]} />
        <Microwave hide={this.state.scribbles[2]} />
        <Ripen hide={this.state.scribbles[3]} />
      </div>
    );
  }
}

export default Painting;
