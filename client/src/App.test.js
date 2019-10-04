import React from 'react';
import App from './App';
import Players from './components/Players'
import { render, fireEvent } from '@testing-library/react';

test('renders without crashing', () => {
  render(<App />);
});

test('renders dark mode options', () => {
  render(<Players />);
});

test('Named class: player, shows player data', () => {
  const { getByText } = render(<App />);

  // assert that the "lions" header is on the DOM
  getByText(/player/i);
});