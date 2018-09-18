// (c) Enroute 2018
//
//     Prepared by AMG
//
//
// In order to run this example:
//    - Delete Materialized CDN in index.html
//    - Add a Select List in index.html
//

const listOfValue = document.querySelector("select");

// Write Task Event Handler - input
listOfValue.addEventListener("change", onChange);

function onChange(e) {
  console.log(`EVENT TYPE: ${e.type} : ${e.target.value}`);
}
