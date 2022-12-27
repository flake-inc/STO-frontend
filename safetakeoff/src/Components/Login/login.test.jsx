import React from 'react';
import LoginPage from './Login';
import { fireEvent, render, screen } from "@testing-library/react";
// import fireEvent from "@testing-library/user-event"



import { act,create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

const setup = () => {
    const utils = render(<Router><LoginPage /></Router>);
    const input = utils.queryByLabelText('EmailAddress')
    return {
      input,
      ...utils,
    }
  }




test('login page displays the correct form fields', () => {
   
  render(<Router><LoginPage /></Router>);

  const usernameField = screen.findAllByTestId('email');
  const passwordField = screen.findAllByTestId('password' );
  expect(usernameField).toBeDefined();
  expect(passwordField).toBeDefined();

});



   

//   const usernameField = screen.findAllByTestId('email');
//   const passwordField = screen.findAllByTestId('password' );
//   const loginButton = screen.findAllByTestId('button');
  
//   act(() => {
//     usernameField.onChange({ target: { value: 'testuser' } });
//     passwordField.props.onChange({ target: { value: 'testpassword' } });
//     loginButton.props.onClick();
//   });
//   // Check that the user is redirected to the appropriate page after login
//   expect(window.location.pathname).toBe('/dashboard');


test('login page displays an error message when the login fails', () => {
    const {input} = setup()
    const usernameField = screen.findAllByTestId('email');
  const passwordField = screen.findAllByTestId('password' );
//   const loginButton = screen.findAllByTestId('button');
  
  fireEvent.change(input, {target: {value: 'testuser@gmail.com'}})
  fireEvent.change(screen.findAllByTestId('password'), {target: {value: 'testpassword'}})
  expect(usernameField).toBe('testuser@gmail.com')
  expect(passwordField).toBe('testpassword')


   
 
  // Check that the user is redirected to the appropriate page after login
//   expect(window.location.pathname).toBe('/dashboard');
});
