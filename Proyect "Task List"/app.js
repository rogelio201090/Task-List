const form = document.querySelector("form");
const task = document.getElementById("task");
const heading = document.querySelector("h5");
let list = document.querySelector("ul.collection");

let taskList = [];

form.addEventListener("submit", runEvent);

function runEvent(e) {
    console.log("submit");
    e.preventDefault();
    const li = document.createElement("li");
    li.className = "collection-item";
    taskList.push(task.value);
    stringObject = JSON.stringify(taskList);
    localStorage.setItem("taskList",stringObject);
    li.id = "new-li-item";

    newTextNode = document.createTextNode(task.value);
    li.appendChild(newTextNode);

    list = document.querySelector("ul.collection");
    list.appendChild(li);
    const a = document.createElement("a");
    a.className = "delete-item secondary-content";
    ahref = "#";
    const i = document.createElement("i");
    i.className = "fa fa-times";
    a.appendChild(i);
    li.appendChild(a);
    
}

function onKey(e){
    heading.innerHTML = e.target.value
}

const bodyNode = document.body; 

bodyNode.addEventListener("click", handleEvent);

function handleEvent(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        //console.log("Delete Task!");
        //taskList.pull(task.value);
        //parseInt = JSON.parse(taskList);
        
        e.target.parentElement.parentElement.remove();
    }
}

//function myfunction() {

//    var input, filter, ul, li, a, i;
//    input = document.getElementById("filtro");
//    filter = input.value.toUpperCase();
//    ul = document.getElementsByClassName("collection");

//    for (i = 0; i < li.length; i++) {
//        a = li[i].getElementsByTagName("a")[0];
//        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//            li[i].style.display = "";
//        } else {
//            li[i].style.display = "none";
//        }
//    }
//}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("collection");
    li = ul[0].getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = document.getElementsByTagName("li")[i];
        console.log(a);
        if (a.innerHTML.toUpperCase().includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}