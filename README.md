# FEM - Intro component with sign up form

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/chucksterv/intro-signup-form]
- Live Site URL: [https://signup-from.projects.deshand.com]

## My process

The form was a pretty interesting challenge. This is how it works.

- Adds a .error class to input fields when there's an error.
- .error class has all the styling needed for the border and the icon.
- styling from the class reverts back to normal when the field is in focus.
- Adding the class and adding text underneath the input is handled by JS.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- SASS
- BEM

### What I learned

- How to move images into specifics spots using background-position
- Form Validation

```js
function validationError(input, message) {
  if (input.classList.contains("error")) {
    //Deals with the case where email goes from invalid to empty
    if (input.nextElementSibling.textContent.length != 0) {
      input.nextElementSibling.textContent = message;
    }
    //Do nothing if the input already has the error class
    return;
  } else {
    //Add .error intot the input element for styling
    input.classList.add("error");
    //Clear out the placeholder text
    input.placeholder = "";
    //clear field
    input.value = "";
    //Add the error message to the span after the input
    input.nextElementSibling.textContent = message;
  }
}
```
