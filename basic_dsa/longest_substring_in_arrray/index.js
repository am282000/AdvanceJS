/* 
    Longest common substring in an array
    ["flower", "flow", "flush"]   => "fl"
*/

function longestSubstring(arr) {
  if (!arr.length) return "";
  const firstWord = arr[0]; // flower
  for (let i = 0; i < firstWord.length - 1; i++) {
    for (const word of arr) {
      if (word[i] !== firstWord[i]) return word.slice(0, i);
    }
  }
}

console.log(longestSubstring(["flower", "flow", "flush"]));
