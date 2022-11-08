// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-03-03-JS/sw.js", {
    scope: "/ICS20-03-03-JS/",
  })
}
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const radius = parseFloat(document.getElementById("radius").value)
  // process
  const volume = (4 * Math.PI * radius ** 2 ).toFixed(2)
  // output
  document.getElementById("volume").innerHTML = "Area is: " + volume + " cm³"
}
