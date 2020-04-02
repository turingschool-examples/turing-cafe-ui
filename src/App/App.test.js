import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from "@testing-library/react";
import { waitFor } from '@testing-library/dom';
import App from './App';

describe('App', () => {

  it('should add new reservations to the page', () => {
    const div = document.createElement('div');
    const app = render(<App />, div);
    async function makeReservation() {
      await waitFor(() => expect(app).toBeInTheDocument())

      const namePlaceholder = getByPlaceholderText('Name')
      const datePlaceholder = getByPlaceholderText('Date (m/dd)')
      const timePlaceholder = getByPlaceholderText('Time')
      const numPlaceholder = getByPlaceholderText('Number of guests')
      const submitBtn = getByText('Make reservation')
      fireEvent.change(nameInput, { target: { value: 'John' } })
      fireEvent.change(datePlaceholder, { target: { value: '8/13' } })
      fireEvent.change(timePlaceholder, { target: { value: '4:30' } })
      fireEvent.change(numPlaceholder, { target: { value: '3' } })
      fireEvent.click(submitBtn, { target: { value: 0 }})
      expect(nameInput.value).toEqual('John')
      expect('John').toBeInTheDocument();

    }
  })

})
