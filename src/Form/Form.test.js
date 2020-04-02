import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

describe('Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render all inputs on the page', () => {
    const { getByPlaceholderText } = render(<Form />);
    const namePlaceholder = getByPlaceholderText('Name')
    const datePlaceholder = getByPlaceholderText('Date (m/dd)')
    const timePlaceholder = getByPlaceholderText('Time')
    const numPlaceholder = getByPlaceholderText('Number of guests')

    expect(namePlaceholder).toBeInTheDocument()
    expect(datePlaceholder).toBeInTheDocument()
    expect(timePlaceholder).toBeInTheDocument()
    expect(numPlaceholder).toBeInTheDocument()
  })

  it('should be able to update form inputs', () => {
    const { getByPlaceholderText } = render(<Form />);
    const nameInput = getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'John' } })
    expect(nameInput.value).toEqual('John')
  })

})
