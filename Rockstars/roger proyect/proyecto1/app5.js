const form = document.querySelector("form");
const task = document.getElementById("task");
const heading = document.querySelector("h5");
let list = document.querySelector("ul.collection");
//const className = document.querySelector("delete-item secondary-content");

//REMOVER TASKS
const bodyNode = document.body;

bodyNode.addEventListener("click", handleEvent);

function handleEvent(e) {
    //if (e.target.className === "fa fa-times") {
    //    console.log("delete this task" + e.target.parentElement.parentElement);
    //    e.target.parentElement.parentElement.remove();
    //    if (e.target.classList.contains("fa-times")) {
    //        console.log("it works!");
    //    }
    //}
    if (e.target.parentElement.classList.contains("delete-item")) {
        console.log("Delete Task!");

        e.target.parentElement.parentElement.remove();
    }
}    

//Agregar tasks y guardar informacion en local storage
let taskList = []; 
form.addEventListener("submit", runEvent);

function runEvent(e) { 
    console.log("submit");
    e.preventDefault();
    const li = document.createElement("li");
    li.className = "collection-item";
    //Agregar cada linea a Local Storage
    taskList.push(task.value);
    stringObject = JSON.stringify(taskList);
    localStorage.setItem("taskList",stringObject);
    //taskList.push(task.value);
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
    //Agregar a Local Storagre
}

function onKey(e) {
    heading.innerHTML = e.target.value

}