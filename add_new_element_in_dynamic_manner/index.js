let counter = 1;
function addNode() {
  let newNode = document.createElement("p");
  let nodeText = document.createTextNode(
    `Hi I am newly added node${counter++} !!`
  );
  newNode.appendChild(nodeText);
  document.getElementById("main").appendChild(newNode);
}
