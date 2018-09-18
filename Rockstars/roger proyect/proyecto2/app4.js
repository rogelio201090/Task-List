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


const form = document.querySelector("form");
let taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const list = document.querySelector("ul.collection");

form.addEventListener("submit", runEvent);

function runEvent(e) {
    //Genera Li cada vez que se presiona submit
    const li = document.createElement("li");
li.setAttribute("class", "collection-Item");
li.innerHTML = `${taskInput}<a href="#" class="delete-item secondary-content>`
    list.appendChild(li);

    console.log(e.type);

    e.preventDefault();
}

taskInput = addEventListener("keydown", onKey);

function onKey(e) { 
    console.log(e.type);

    heading.innerHTML = e.target.value;
    
}

