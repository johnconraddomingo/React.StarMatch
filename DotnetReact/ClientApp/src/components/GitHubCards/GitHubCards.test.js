import React from 'react';
import ReactDOM from 'react-dom';
import GitHubCards from './GitHubCards';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GitHubCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});