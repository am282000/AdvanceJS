checkPalidrome = () => {
  let inputString = prompt();
  //   if (+inputString < 0) return false;
  return +inputString < 0
    ? false
    : inputString === inputString.split("").reverse().join("");
};

const onLoad = () => {
  const result = checkPalidrome();
  console.log(result ? "Palindrome" : "Not a palindrome");
};

// document.addEventListener("DOMContentLoaded", onLoad);
