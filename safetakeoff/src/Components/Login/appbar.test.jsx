import React from 'react';
import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
// import fireEvent from "@testing-library/user-event"



import { act,create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';





test('log out navigation test', () => {
    // const {input} = setup()
    const {getByTestId} = render(<Router><ResponsiveAppBar /></Router>);
    const confirm = getByTestId("logout")

 
  fireEvent.click(confirm);
  expect(window.location.pathname).toBe('/');


 
});

test('check weather navigation test', () => {
    // const {input} = setup()
    const {getByTestId} = render(<Router><ResponsiveAppBar /></Router>);
    const confirm = getByTestId("Check Weather")

 
  fireEvent.click(confirm);
  expect(window.location.pathname).toBe('/weather');


 
});

test('Congigurations navigation test', () => {
    // const {input} = setup()
    const {getByTestId} = render(<Router><ResponsiveAppBar /></Router>);
    const confirm = getByTestId("Configurations")

 
  fireEvent.click(confirm);
  expect(window.location.pathname).toBe('/config');


 
});

test('Flights navigation test', () => {
    // const {input} = setup()
    const {getByTestId} = render(<Router><ResponsiveAppBar /></Router>);
    const confirm = getByTestId("Flights")

 
  fireEvent.click(confirm);
  expect(window.location.pathname).toBe('/aircrafts');


 
});






