//Create Event Listener

button = document.getElementById("button");
button.addEventListener("click", buttonEventHandler);


function buttonEventHandler(e) {
    console.log(e.type);

    //Create Object XHR
    const xhr = new XMLHttpRequest();

    //console.log(xhr);

    xhr.open('GET','data.txt', true);

    xhr.onload = function() {
        if (this.status === 200) {
        document.getElementById("output").innerHTML = `<h1>${
            this.responseText
        }</h1>`;

        }
    };

    xhr.send();


}