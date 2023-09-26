import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MtgList from './MtgList';

describe('<MtgList />', () => {
  test('it should mount', () => {
    render(<MtgList />);
    
    const mtgList = screen.getByTestId('MtgList');

    expect(mtgList).toBeInTheDocument();
  });
});