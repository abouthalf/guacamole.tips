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

// ingredients
import Tomato from './layers/Tomato';
import PittedAvocados from './layers/PittedAvocados';
import Onion from './layers/Onion';
import LimeWedge from './layers/LimeWedge';
import HalfLime from './layers/HalfLime';
import GreenAvocados from './layers/GreenAvocados';
import Garlic from './layers/Garlic';
import FourLimes from './layers/FourLimes';

class Painting extends Component 
{
  constructor(props) {
    super(props);
    // set default visibility states
    this.state = {
      scribbles: [false, true, true, true],
      ingredients: [false, true, true, true, true, true, true, true]
    };
  }
  handleAnimationIteration = (event) => {
    // shuffle 
    let state = {
      scribbles: _.shuffle(this.state.scribbles),
      ingredients: _.shuffle(this.state.ingredients)
    }
    this.setState(state);
    // console.log(event.elapsedTime);
  }
  render() {
    return (
      <div className="Painting">
        <Day />
        <Tomato hide={this.state.ingredients[0]} />
        <PittedAvocados hide={this.state.ingredients[1]} />
        <Onion hide={this.state.ingredients[2]} />
        <LimeWedge hide={this.state.ingredients[3]} />
        <HalfLime hide={this.state.ingredients[4]} />
        <GreenAvocados hide={this.state.ingredients[5]} />
        <Garlic hide={this.state.ingredients[6]} />
        <FourLimes hide={this.state.ingredients[7]} />
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
