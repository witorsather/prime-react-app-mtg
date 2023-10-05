import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardDetails from './CardDetails';

describe('<CardDetails />', () => {
  test('it should mount', () => {
    render(<CardDetails />);
    
    const cardDetails = screen.getByTestId('CardDetails');

    expect(cardDetails).toBeInTheDocument();
  });
});