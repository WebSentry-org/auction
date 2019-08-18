import React from 'react';
import ReactDOM from 'react-dom';
import Auction from './Auction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Auction />, div);
  ReactDOM.unmountComponentAtNode(div);
});
