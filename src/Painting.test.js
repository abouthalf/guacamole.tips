import React from 'react';
import ReactDOM from 'react-dom';
import Painting from './Painting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Painting />, div);
});
