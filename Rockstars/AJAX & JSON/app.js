document.getElementById('button1').addEventListener("click", loadCustomer);

function loadCustomer(e) {
    //console.log(e.type);

    xhr = new XMLHttpRequest();

    xhr.open("GET", "customer.json", true);

    xhr.onload = function() {
        if (this.status === 200) {
            //constole.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            console.log(customer);
        }
    };

    xhr.send();
}
