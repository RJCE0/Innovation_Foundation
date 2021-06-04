import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('Database data can be successfully retrieved', () => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('An update in the database updates internships', () => {})
