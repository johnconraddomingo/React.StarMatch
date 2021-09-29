import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCounter from './ButtonCounter';

it('It should mount', () => {
  const div = document.createElement('div');
    ReactDOM.render(<ButtonCounter />, div);
  ReactDOM.unmountComponentAtNode(div);
});