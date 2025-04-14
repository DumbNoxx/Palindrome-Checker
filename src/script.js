// Gets the reference to the text input element from the DOM using its ID "text-input".
const inputText = document.getElementById("text-input");

// Gets the reference to the verification button from the DOM using its ID "check-btn".
const inputBtn = document.getElementById("check-btn");

// Gets the reference to the element where the result will be displayed using its ID "result".
const result = document.getElementById("result");

/**
 * Function to clean a string by removing non-alphanumeric characters
 * and converting all characters to lowercase.
 *
 * @param {string} str - The string to be cleaned.
 * @returns {string} - The cleaned string, without special characters and in lowercase.
 */
const cleanInput = (str) => {
  // Regular expression that matches any character that is not a letter or a number.
  const regex = /[^a-z0-9]/g;
  // Converts the string to lowercase and removes non-alphanumeric characters.
  return str.toLowerCase().replace(regex, "");
};

/**
 * Function that checks if the entered text is a palindrome.
 * Also handles the case where the input field is empty.
 */
const textEmpty = () => {
  // Gets the value of the text input field and trims whitespace from the beginning and end.
  const textInvalidate = inputText.value.trim();
  // Cleans the entered text using the cleanInput function.
  const text = cleanInput(textInvalidate);
  // Reverses the cleaned text to compare it with the original text.
  const textInverted = text.split("").reverse().join("");

  // Checks if the cleaned text has a length of 0 (i.e., it is empty).
  if (text.length === 0) {
    // Displays an alert to the user indicating that they must enter a value.
    alert("Please input a value");
    // Updates the content of the result element with an error message.
    return (result.innerText = "Please input a value");
  } else {
    // If the cleaned text is equal to the reversed text, it is a palindrome.
    if (text === textInverted) {
      // Logs the reversed text to the console for debugging.
      console.log(textInverted);
      // Updates the content of the result element indicating it is a palindrome.
      result.innerText = `${textInvalidate} is a palindrome`;
    } else {
      // If the cleaned text is not equal to the reversed text, it is not a palindrome.
      // Logs the reversed text to the console for debugging.
      console.log(textInverted);
      // Updates the content of the result element indicating it is not a palindrome.
      result.innerText = `${textInvalidate} is not a palindrome`;
    }
  }
};

// Adds a "click" event to the verification button.
// When the button is pressed, the textEmpty function is executed.
inputBtn.addEventListener("click", textEmpty);
