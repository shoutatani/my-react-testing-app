import React from 'react';
import ReactDOM from 'react-dom';
import SayBye from '../../../components/SayBye';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SayBye />, div);
  ReactDOM.unmountComponentAtNode(div);
});
