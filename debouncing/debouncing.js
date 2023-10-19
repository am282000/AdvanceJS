// Dont call API on  every key stroke

const filterSearch = document.getElementById("search-filter");
let timer = null;
function fetchResults() {
  const that = this;
  const args = arguments;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    logger.apply(that, args);  //to keep the reference of his variable and arguements
  }, 500);
}

function logger() {
  console.log(filterSearch.value);
}
