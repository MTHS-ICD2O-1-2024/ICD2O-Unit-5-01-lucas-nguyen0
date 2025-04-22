// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random()*6) + 1

function enterClicked() {
  // input
  const inputNumber = parseFloat(document.getElementById("input-number").value)
  // process
  if (inputNumber == randomNumber) {
    document.getElementById('answer').innerHTML =
    'You have guessed the correct number!'
  }

  if (inputNumber !== randomNumber) {
    document.getElementById("answer").innerHTML =
    'You have guessed the wrong number!' +
    '<br/>The correct number was: ' + randomNumber
  }
}
