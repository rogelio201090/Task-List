//Create Event Listener

document.getElementById("button").addEventListener("click", loadData);


function loadData(e) {
    //console.log(e.type);

    //Create Object XHR
    const xhr = new XMLHttpRequest();

    //console.log(xhr);

    xhr.open('GET','data.txt', true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    };

    xhr.send();


}