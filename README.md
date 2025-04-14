# Palindrome Checker

`A web application that checks for palindromes using JavaScript`

## Key Features

- Identifies palindromes while ignoring capitalization, spaces, and special characters
- Validates empty input fields by showing an alert
- Displays dynamic results in the DOM

## Technologies Used

`JavaScript` `HTML` `CSS`  
`DOM Manipulation` `Regular Expressions`

## How It Works

The core functionality comes from this function:

`const cleanInput = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");`

1. Takes input text
2. Cleans non-alphanumeric characters
3. Compares with reversed version

## Valid Examples

- "race car"
- "A man, a plan, a canal. Panama"
- "0_0 (: /-\ :) 0-0"

## Installation

1. Clone the repository
2. Open `index.html` in your browser

> Educational project for practicing DOM manipulation and regular expressions
