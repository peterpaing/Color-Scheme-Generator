# Color Scheme Generator

A simple web application that generates a five-color palette based on a selected color and color scheme using **The Color API**.

## Features

* 🎨 Choose any base color using the color picker.
* 🌈 Select a color scheme:

  * Monochrome
  * Monochrome Dark
  * Monochrome Light
  * Analogic
  * Complement
  * Analogic Complement
  * Triad
* 🚀 Generate a five-color palette instantly.
* 📋 Click any color to copy its HEX code to your clipboard.

## Built With

* HTML5
* CSS3
* JavaScript (ES6)
* The Color API

## How It Works

1. Select a base color.
2. Choose a color scheme.
3. Click **Generate Color Scheme**.
4. The application requests a palette from The Color API.
5. Click any generated color to copy its HEX code.

## API

This project uses **The Color API** to generate color palettes.

Example request:

```text
https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome&count=5
```

## What I Learned

During this project, I practiced:

* Fetching data from an external API
* Working with JavaScript Promises
* Using template literals
* Dynamically rendering HTML with `map()`
* Handling form submissions
* DOM manipulation
* Event handling
* Copying text to the clipboard using the Clipboard API

## Future Improvements

* Display a "Copied!" message instead of an alert.
* Add loading and error states.
* Improve accessibility.
* Add responsive design improvements.
* Save recently generated palettes.

## Acknowledgements

* Scrimba Frontend Developer Career Path
* The Color API
