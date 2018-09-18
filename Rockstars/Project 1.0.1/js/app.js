//Initial variables


const submitBtn = document.querySelector('form'); //Submit BTN
const taskInput = document.getElementById("task"); //Input
const ul = document.querySelector("ul.collection"); //List
const deleteAllTasks = document.querySelector(".clear-tasks");
const filterInput = document.getElementById("filterTask");

let localFilterArray = new Array;
var storeTasks = new Array;

function muestraReloj() {
    var fechahora = new Date();
    var horas = fechahora.getHours();
    var minutos = fechahora.getMinutes();
    var segundos = fechahora.getSeconds();

    if(horas < 10) {horas = '0' + horas;}
    if(minutos < 10) {minutos = '0' + minutos;}
    if(segundos < 10){segundos = '0' + segundos;}

    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
}

window.onload = function(){
    setInterval(muestraReloj, 1000);
}

//setTimeout(function()){alert("Hello");},3000);
var myVar; 

function myStartFunction() {
    myVar = setTimeout(function(){alertfunc("First param", "Second param");},5000);
}


// Events and Event Handlers & Functions

    //Events

    window.addEventListener("load", afterloadDOM);
    submitBtn.addEventListener("submit", eventSubmit);
    deleteAllTasks.addEventListener("click", clearTasks)
    ul.addEventListener("click", removeElement);
    filterInput.addEventListener("keyup", filterTasks);

    //Event Handlers

    function afterloadDOM () {
            if (localStorage.Tasks) {
                storeTasks = readLocalSTasks();
                writeUL(storeTasks);
            } else { storeTasks.length = 0;}
    }

    function eventSubmit (e) {

            if (taskInput.value !== "") {
                let li = document.createElement("li");
                li.setAttribute('class','collection-item');
                li.innerHTML = `${taskInput.value} <a href="#" class="delete-item secondary-content"><i class="fa fa-times"></i></a>`;
                ul.appendChild(li);
                storeTasks.push(taskInput.value);
                rewriteIDs();
                writeLocalSTasks(storeTasks);
                taskInput.value = "";
            }
            rewriteIDs();
            e.preventDefault();
    };

     function clearTasks(e) {
        let liList = document.querySelectorAll("li");
        let erase = confirm("Erase all Tasks?");
        if (erase) {
            liList.forEach(function (elemento,i) {
                elemento.remove();
                localStorage.clear();
            });
            storeTasks.length = 0;
        }
        e.preventDefault();
    };

    function removeElement(e) {
        let idErase = e.target.parentElement.parentElement.getAttribute("id");
        if (e.target.className === "fa fa-times") {
            e.target.parentElement.parentElement.remove();
        }
        storeTasks = readLocalSTasks();
        storeTasks.splice(Number(idErase),1);        
        writeLocalSTasks(storeTasks);
        rewriteIDs();
        e.preventDefault();
     };


     function filterTasks (e) {
        let liList = ul.querySelectorAll("li");
        if (filterInput.value !== "") {
            liList.forEach(function (element,i) {
                if (element.innerText.search(filterInput.value) >= 0) {
                    element.style.display = "block";
                } 
                else {
                    element.style.display = "none";
                }
            });
        }
        else {
            liList.forEach(function (element,i) {
                element.style.display = "block";
            });
        }
     };

    //Functions
     
    function readLocalSTasks () {
        return JSON.parse(localStorage.Tasks);
    };

    function writeLocalSTasks (tasks) {
        localStorage.setItem("Tasks",JSON.stringify(tasks));
    };

    function rewriteIDs () {
        let ids = document.querySelectorAll("li.collection-item");
        ids.forEach(function (element,i) {
            element.setAttribute("id",`${i}`);
        });
    };

    function writeUL(taskList) {
        ul.innerHTML = "";
        taskList.forEach( function (element,i) {
        let li = document.createElement("li");
        li.setAttribute('class','collection-item');
        li.setAttribute('id',`${i}`);
        li.innerHTML = `${element} <a href="#" class="delete-item secondary-content"><i class="fa fa-times"></i></a>`;
        ul.appendChild(li);
        });
        rewriteIDs();
    }; 

