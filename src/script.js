const inputText = document.getElementById("text-input");
const inputBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const cleanInput = (str) => {
  const regex = /[^a-z0-9]/g;
  return str.toLowerCase().replace(regex, "");
};

const textEmpty = () => {
  const textInvalidate = inputText.value.trim();
  const text = cleanInput(textInvalidate);
  const textInverted = text.split("").reverse().join("");
  if (text.length === 0) {
    alert("Please input a value");
    return (result.innerText = "Please input a value");
  } else {
    if (text === textInverted) {
      console.log(textInverted);
      result.innerText = `${textInvalidate} is a palindrome`;
    } else {
      console.log(textInverted);
      result.innerText = `${textInvalidate} is not a palindrome`;
    }
  }
};

inputBtn.addEventListener("click", textEmpty);
