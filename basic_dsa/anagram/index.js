// Naive => sort both string and compare they are equal or not

const naiveIsAnagram = () => {
  const word = document.querySelector("#inputWord").value;
  const word2 = document.querySelector("#inputWord2").value;

  word = word.split("").sort().join("");
  word2 = word2.split("").sort().join("");
  return word === word2;
};

const isAnagram = () => {
  const word = document.querySelector("#inputWord").value;
  const word2 = document.querySelector("#inputWord2").value;

  let arr = word.split("");
  let temp = [...arr];
  if (word2.length !== word.length) return false;

  for (let i = 0; i <= temp.length; i++) {
    const index = arr.indexOf(word2[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  return arr.length === 0;
};

// Approach 3 using objects - create 2 objects with respective keys
// like {"a" : 1 , "n" : 2} - than a loop to check both a of obj1 and obj 2 are same

const isAnagraam = () => {
  const word = document.querySelector("#inputWord").value;
  const word2 = document.querySelector("#inputWord2").value;

  if (word.length !== word2.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < word.length; i++) {
    obj1[word[i]] = (obj1[word[i]] || 0) + 1;
    obj2[word2[i]] = (obj2[word2[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const checkAnagram = () => {
  //   const res = naiveIsAnagram();
  //   const res = isAnagram();
  const res = isAnagraam();

  console.log(res ? "Anagram" : "Not Anagram");
};
