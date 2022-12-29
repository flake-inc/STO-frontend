import React from 'react';
import LoginPage from './Login';
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
// import fireEvent from "@testing-library/user-event"



import { act,create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';


test('login page testing for email  ', () => {
  // const {input} = setup()
  const {getByTestId} = render(<Router><LoginPage /></Router>);
  const usernameField = getByTestId('email')

fireEvent.change(usernameField, {target: {value: 'testuser@gmail.com'}})
expect(usernameField.value).toBe('testuser@gmail.com')


});

test('login page testing for password  ', () => {
  // const {input} = setup()
  const {getByTestId} = render(<Router><LoginPage /></Router>);
  const passwordField = getByTestId('email')

fireEvent.change(passwordField, {target: {value: 'testpassword'}})
expect(passwordField.value).toBe('testpassword')

});


test('login page displays the correct form fields', () => {
   
  render(<Router><LoginPage /></Router>);

  const usernameField = screen.findAllByTestId('email');
  const passwordField = screen.findAllByTestId('password' );
  expect(usernameField).toBeDefined();
  expect(passwordField).toBeDefined();

});






 

// Check that the user is redirected to the appropriate page after login





test('login page pass  when the correct credentials given', () => {
    // const {input} = setup()
    const {getByTestId} = render(<Router><LoginPage /></Router>);
    const usernameField = getByTestId('email')
  const passwordField = getByTestId('password')
  const confirm = getByTestId("subbutton")
  
  fireEvent.change(usernameField, {target: {value: 'testuser@gmail.com'}})
  fireEvent.change(passwordField,{target: {value: 'testpassword'}})
  expect(usernameField.value).toBe('testuser@gmail.com')
  expect(passwordField.value).toBe('testpassword')
  fireEvent.click(confirm);
  expect(window.location.pathname).toBe('/');




   
 
  // Check that the user is redirected to the appropriate page after login
});





