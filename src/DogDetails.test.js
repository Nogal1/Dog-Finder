// src/DogDetails.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DogDetails from './components/DogDetails';
import { useParams } from 'react-router-dom';

// Mock the useParams hook to return a valid dog name
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ name: 'Whiskey' }), // Set this to a dog name you want to test
}));

const dogs = [
  {
    name: 'Whiskey',
    age: 5,
    src: 'whiskey.jpg',
    facts: ['Whiskey loves eating popcorn.'],
  },
  {
    name: 'Duke',
    age: 3,
    src: 'duke.jpg',
    facts: ['Duke loves playing fetch.'],
  },
];

test('renders dog details', () => {
  const { getByText } = render(
    <BrowserRouter>
      <DogDetails dogs={dogs} />
    </BrowserRouter>
  );

  expect(getByText('Whiskey')).toBeInTheDocument();
  expect(getByText('Whiskey loves eating popcorn.')).toBeInTheDocument();
});
