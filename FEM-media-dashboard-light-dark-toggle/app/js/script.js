const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

//sets prefrence to dark mode
const setDarkMode = () => {
    console.log('setDarkMode');
    document.querySelector('body').classList = 'dark';
}

//sets preference to light mode
const setLightMode = () => {
    console.log('setLightMode');
    document.querySelector('body').classList = 'light';
  };

//gets the color mode from local storage
const getColorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
};

//gets the color mode value from system preferences
const getColorModeFromPreferences = () => {
    return window.matchMedia("(perfers-color-scheme: dark)").matches
    ? 'dark' : 'light'
};

//sets color to local storage value if value exists, else sets color based on platform's preferences
const loadAndSetColorMode = () => {
    console.log('setColorMode');
    console.log(localStorage.getItem('colorMode'));
    
    const color = getColorModeFromLocalStorage() || getColorModeFromPreferences();
    color == 'dark' ? darkButton.click() : lightButton.click();
};

// adds an event listener to each toggle button that when a radio button is checked, change the colorMode to the indicated color
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(b => {
    b.addEventListener('click', (event) => {
      darkButton.checked ? setDarkMode() : setLightMode();
    });
  });

// when the prefers-color-scheme changes, media query with check if match is present
// if it matches, the new color is dark, else it is light
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
      });
      
// Load the right color on startup - localStorage has precedence
loadAndSetColorMode();