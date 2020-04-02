import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';
import "@testing-library/jest-dom";
import { waitFor } from '@testing-library/dom';
import { render } from "@testing-library/react";

describe('Reservation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Reservation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders at least one reservation card', () => {
    const card = document.querySelector('.reservation-card')
    const { getByText } = render(<Reservation />);
    async function getCard() {
      await waitFor(() => expect(card).toBeInTheDocument());
    }
    getCard();
  })

})
