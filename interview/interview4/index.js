let prevCenterX;
let prevCenterY;
document.addEventListener("mousedown", (event) => {
  const container = document.getElementById("container");

  // Remove existing circles if more than 2
  const existingCircles = document.querySelectorAll(".random-circle");
  if (existingCircles.length > 1) {
    existingCircles.forEach((circle) => container.removeChild(circle));
  }

  // Create a new circle
  const newCircle = document.createElement("div");
  const randomRadius = parseFloat((Math.random() * 100).toFixed(1));
  const left = event.clientX - randomRadius;
  const top = event.clientY - randomRadius;

  // Apply styles to the new circle
  newCircle.className = "random-circle";
  newCircle.style.border = "1px solid black";
  newCircle.style.borderRadius = "50%";
  newCircle.style.height = 2 * randomRadius + "px";
  newCircle.style.width = 2 * randomRadius + "px";
  newCircle.style.position = "absolute";
  newCircle.style.left = left + "px";
  newCircle.style.top = top + "px";

  container.appendChild(newCircle);

  // Check for intersections
  const circles = document.querySelectorAll(".random-circle");

  if (circles.length > 1) {
    const circle1 = circles[0].getBoundingClientRect();
    const circle2 = circles[1].getBoundingClientRect();

    //  Circle1 Center X - Circle 2 center X
    const dx = prevCenterX - event.clientX;
    const dy = prevCenterY - event.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy); // Distance b/w 2 circle's center

    // Or we can calculate distance this too
    // const distance = Math.hypot(dx, dy);

    const radius1 = circle1.width / 2;
    const radius2 = circle2.width / 2;

    if (distance < Math.abs(radius1 - radius2)) {
      console.log("One circle is inside the other");
    } else if (distance === Math.abs(radius1 - radius2)) {
      console.log("One circle touches the other from the inside");
    } else if (distance < radius1 + radius2) {
      console.log("Circles intersect each other");
    } else if (distance === radius1 + radius2) {
      console.log("Circles touch each other from the outside");
    } else {
      console.log("Circles do not touch each other");
    }
  } else {
    prevCenterX = event.clientX;
    prevCenterY = event.clientY;
  }
});
