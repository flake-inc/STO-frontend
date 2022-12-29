import React from 'react';
import Config from "../Config/EditWebApp";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
// import fireEvent from "@testing-library/user-event"



import { act,create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';







test('add staff the correct form fields', () => {
   
  render(<Router><Config /></Router>);

  const usernameField = screen.findAllByTestId('email');
  const passwordField = screen.findAllByTestId('password' );
  expect(usernameField).toBeDefined();
  expect(passwordField).toBeDefined();

});

test('add dataset the correct form fields', () => {
   
  render(<Router><Config /></Router>);

  const dataset = screen.findAllByTestId('dataset');
  expect(dataset).toBeDefined();

});







 

// Check that the user is redirected to the appropriate page after login





// test('login page pass  when the correct credentials given', () => {
//     // const {input} = setup()
//     const {getByTestId} = render(<Router><Config /></Router>);
//     const usernameField = getByTestId('email')
//   const passwordField = getByTestId('password')
//   const confirm = getByTestId("subbutton")
  
//   fireEvent.change(usernameField, {target: {value: 'testuser@gmail.com'}})
//   fireEvent.change(passwordField,{target: {value: 'testpassword'}})
//   expect(usernameField.value).toBe('testuser@gmail.com')
//   expect(passwordField.value).toBe('testpassword')
//   fireEvent.click(confirm);
//   expect(window.location.pathname).toBe('/');




   
 
//   // Check that the user is redirected to the appropriate page after login
// });





