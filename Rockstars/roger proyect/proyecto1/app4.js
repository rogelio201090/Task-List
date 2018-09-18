//let val;

//const list = document.querySelector("ul.collection");
//const listItem = document.querySelector("li.collection-item:first-child");
//console.log(listItem);


//val = list.childNodes;

//node = document.querySelector("title");
//console.log(node);
//console.log(node.firstChild);
//console.log(node.firstChild.nodeValue);

//type = documentquerySelector("ul.collection").childNodes[0].nodeType;


//const li = document.createElement("li");

//console.log(li); 

// ADD CLASS
//li.className = "collection-items s12";
// ADD ID 
//li.id = "new-li-item";
// ADD ATTRIBUTE
//li.setAttribute("title", "New li Item");


//li.innerText = "This is a new LI"
//li.textContent = "This is a new LI"
// Create Text Node 
//newTextNode = document.createTextNode("This is a new Li");

//li.appendChild(newTextNode);

//ALSO: li.appendChild(document.createTextNode("This is a new Li"));


// Add li to ul 
//list = document.querySelector("ul.collection");
//console.log(list);

//list.appendChild(li); 


//li.setAttribute("href", "#",);
//console.log(li);
//li.attribute.className("href", "delete-item secondary content");
//console.log(li); 

//const a = document.createElement("a");

//console.log(a); 

//a.className = "delete-item secondary content";
//a.setAttribute("href", "#");

//const fa = document.createElement("i");
//fa.className = "fa fa times";
//console.log(fa);

//a.appendChild(fa);

//li.appendChild(a); 





//const a = document.createElement("a");
//a.class = "delete-item secondary-content";
//a.setAttribute("href", "#");
//const fa = document.createElement("i");
//fa.classname = "fa fa times";

//console.log(a);
//console.log(fa);

//const fa = document.createElement("i");
//fa.classname = "fa fa times";

//li.appendChild(a);
//li.appendChild(fa);


//const clearTaskButton = document.querySelector(".clear-tasks");

//clearTaskButton.addEventListener("click", eventHandler);

//function eventHandler(e) {
    //console.log("click!");

    //e.preventDefault();
    
    //Target
    //targetObj = e.target;

    //targetObj.innerText = "Stop It";

    //console.log(e);
    //console.log(e.target);
    //console.log(e.type);
    //console.log(e.x, e.y);



//const clearBtn = document.querySelector(".clear-tasks");

//clearBtn.addEventListener('click',eventHandler);
//clearBtn.addEventListener("dblclick", eventHandler);
//clearBtn.addEventListener("mouseup", eventHandler);
//clearBtn.addEventListener("mousedown", eventHandler);
//clearBtn.addEventListener("mouseenter", eventHandler);


//function eventHandler(e) {
    //console.log(`Event Type: [${e.type}]`);

    //e.preventDefault();
//}


//const form = document.querySelector(.)
//const form = document.querySelector("form");
//let taskInput = document.getElementById("task");
//const heading = document.querySelector("h5");

//form.addEventListener("submit", runEvent);

//function runEvent(e) {
//    console.log(e.type);

//    e.preventDefault();
//}

//taskInput = addEventListener("keydown", onKey);

//function onKey(e) { 
//    console.log(e.type);

//    heading.innerHTML = e.target.value;
    
//}


//const form = document.querySelector("form");
//let taskInput = document.getElementById("task");
//const heading = document.querySelector("h5");
//const list = document.querySelector("ul.collection");

//form.addEventListener("submit", runEvent);

//function runEvent(e) {
    //Genera Li cada vez que se presiona submit
    //const li = document.createElement("li");
//li.setAttribute("class", "collection-Item");
//li.innerHTML = `${taskInput}<a href="#" class="delete-item secondary-content>`
    //list.appendChild(li);

    //console.log(e.type);

    //e.preventDefault();
//}

//taskInput = addEventListener("keydown", onKey);

//function onKey(e) { 
    //console.log(e.type);

    //heading.innerHTML = e.target.value;
    
//}

//Event Bubbling 

//const childNode = document.querySelector("li");
//const parentNode = document.querySelector("ul");
//const grandParentNode = document.querySelector(".card-action");
//const grandGrandParentNode = document.querySelector(".card-content");


//childNode.addEventListener(`click`,function(e) {
//    console.log("Child Node: li");
//});

//parentNode.addEventListener("click", function(e) {
//    console.log("Parent Node: ul");
//});

//grandParentNode.addEventListener("click", function() {
//    console.log("Grand Parent Node: card-action");
//});

//grandGrandParentNode.addEventListener("click", function(e) {
//    console.log("Grand Grand Parent Node: card-content");
//});

// Event Delegation 

///const bodyNode = document.body; 

//bodyNode.addEventListener("click", eventHandler);

//function eventHandler(e) {
//    if(e.target.parentElement.className === "delete-item secondary-content") {
//    e.target.parentElement.parentElement.remove
//    console.log(e.target.parentElement);
//    }

// console.log(e.target);
//}
//if (e.target.classList.containt("fa-times")) { 
//    console.log("it works!"); 
//      e.target.prentElement.parentElement.remove();
//   }
//console.log(e.target);

//e.preventDefault();

//}

//function eventHandler(e) {
//    if(e.target.parentElement.className === "delete-item secondry-content") {
//    e.target.parentElement.parentElement.remove();
//    console.log(e.target.parentElement);
//    }
//    //console.log(e.target);
//    e.preventDefault();

//}

//function eventHandler(e) {
//    if(e.target.classList.containt("fa-times")) {
//        console.log("it works!");
//        e.target.parentElement.parentElement.remove(); 
//    }
//}

// Access local storage

//const name = prompt('nombre');

localStorage.setItem("firstName", name);

localStorage.removeItem(name);

//localStorage.clear;


//let clientName = ["Hector", "Monica", "Laura", "Saul"]


//stringyObject = json.stringify(clientName);

//clientName = JSON.parse(localStorage.getItem("clientName"));





























