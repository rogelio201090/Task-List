function addMessage(element, message) {
    const messageElement = document.createElement("li");
    messageElement.textContent = message;
    element.appendChild(messageElement);
}

const first = document.getElementById("first");
const second = document.getElementById("second");

addMessage(first, "Page Loading");

document.body.addEventListener("mousemove", function() {
    addMessage(second, "Event: mousemove");
});

document.body.addEventListener("mousedown", function(e) {
    if (e.button === 0) {
        msg = "Left Click";
    } else if (e.button === 1) {
        msg = "Wheel click";
    } else {
        msg = "Unknown button";
    }
    addMessage(second, `Event: click ${msg}`);
});