"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Get the entire text from the HTML
  const wholeText = document.querySelector("#cooltext");

  //The h1 needs to be splitted, so for a single letter = make it an array
  let singleLetterAnimation = Array.from(wholeText.textContent);

  console.log(singleLetterAnimation);

  // Remove the existing text, make it empty
  wholeText.textContent = "";

  // For each character in the text:
  singleLetterAnimation.forEach((letter, index) => {
    // create a <span> element
    const animation = document.createElement("span");

    animation.classList.add("letter", "singleAnimationStart");
    animation.style.setProperty("--letter", index);
    //If the letter is a space then it should add a space
    if (letter === " ") {
      //non-breaking space, it will not break into a new line
      //"&nbsp;" = entity name
      animation.innerHTML = "&nbsp;";
    } else {
      //letter becomes a letter
      animation.textContent = letter;
    }
    // and append the element to the HTML
    wholeText.append(animation);
  });
}
