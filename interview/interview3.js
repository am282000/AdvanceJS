// To use module

// In HTML add typ='module'

{
  /* <body>
    <div id="div">
      <button id="btn">Resolve</button>
      <button id="btn2">Reject</button>
    </div>
    <script src="./index.js" type="module"></script>
  </body> */
}

//   Guess the output

// In index.js

console.log("Start");
import { name } from "./second.js";
console.log(name);

// In second.js

console.log("I am chotu");

const name = "Chotu";
export { name };



// Output is 
// I am chotu
// Start
// Chotu

