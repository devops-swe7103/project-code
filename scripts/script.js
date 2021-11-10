console.log(`script.js connected!`);

const outputField = document.getElementById("output");

const obj = [
  { name: "ram", age: 2500, power: "yes" },
  { name: "krishna", age: 2325, power: "no" },
  { name: "dharnish", age: 3000, power: "yes" },
  { name: "pratham", age: 2123, power: "no" },
  { name: "kaage", age: 1298, power: "yes" },
  { name: "ananda", age: 2830, power: "no" },
  { name: "mohan", age: 2839, power: "no" },
  { name: "channabassapa", age: 2331, power: "yes" },
];

// obj1.forEach(function (array) {
//   if (array.power === "yes") {
//     outputField.innerHTML = `<li>${array.name}</li>`;
//   }
// });

// Approach 1: create element then append to parent
obj.forEach((item) => {
  // create the element with inner content
  let newElement = document.createElement("li");
  // <li></li>
  newElement.innerText = item.name;
  // <li>${item.name}</li>

  // append the element to the parent element
  if (item.power === "yes") outputField.append(newElement);
  // <div id="output">
  //   {old-content}
  //   <li>${item.name}</li>
  // </div>
});

// Approach 2: create an array of new elements - then append all of them
let newObjArray = [];

obj.forEach((item) => {
  // create the element with inner content
  let newElement = document.createElement("li");
  // <li></li>
  newElement.innerText = item.name;
  // <li>${item.name}</li>

  // append the element to the parent element
  if (item.power === "yes") newObjArray.push(newElement);
  // [ {old-content}, <li>${item.name}</li>]

  if (item.)
});

// .append can add multiple values but appendChild cannot
// parent.append(child, childTwo, 'Hello world');
// Works fine - adds all
// parent.appendChild(child, childTwo, 'Hello world');
// Works fine, but adds the first element and ignores the rest

// to add the array content we will use the spread operator
outputField.append(...newObjArray);
