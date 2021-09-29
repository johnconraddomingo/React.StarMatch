import React from 'react';
import ReactDOM from 'react-dom';
import StarMatch from './StarMatch';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarMatch />, div);
  ReactDOM.unmountComponentAtNode(div);
});