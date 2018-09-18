// (c) Enroute 2018
//
//     Prepared by AMG
//

const clearTaskButton = document.querySelector(".clear-tasks");

clearTaskButton.addEventListener("click", eventHandler);

function eventHandler(e) {
  console.log("click!");

  e.preventDefault(); // prevents reload of page

  //Target
  targetObj = e.target;

  targetObj.innerText = "Stop It!";

  //console.log(targetObj.className);
  console.log(targetObj.id);

  // console.log(e);
  // console.log(e.target);
  // console.log(e.type);
  // console.log(e.x, e.y);
}
