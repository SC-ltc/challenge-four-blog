//Use this JS file for the light/dark mode since it needs to apply to both pages

const themeModeButton = document.querySelector('#lightingmode'); //Access light/dark mode button
const container = document.querySelector('.container'); //Access body container on both pages

//Set default theme mode to light
let mode = 'light';

// Listen for a click event on the theme mode button
themeModeButton.addEventListener('click', function () {
    // If mode is light, then switch to dark mode
    if (mode === 'light') {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
    // If mode is dark, then switch to light mode
    else {
      mode = 'dark';
      container.setAttribute('class', 'light');
    }
  });