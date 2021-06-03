/* function addErrorClass(elementId) {
    let firstName = document.getElementById("first_name");
    let lastName = document.getElementById("last_name");
    let address = document.getElementById("address");
} */

function addErrorClass(elementId) {
    let element = document.getElementById(elementId);
    element.className = "error_input";
}

function addErrorClassToAllInputs() {
    debugger;
    addErrorClass("first_name");
    addErrorClass("last_name");
    addErrorClass("address");
}

// addErrorClass("last_name");

// window.setTimeout(addErrorClassToAllInputs, 2000);

let sendButton = document.getElementById("send_button");

// sendButton.addEventListener("click", addErrorClassToAllInputs);

sendButton.addEventListener("click", onSendButtonClick);

function onSendButtonClick() {
    addErrorClass("last_name");
}

function onFirstNameKeyUp() {
    addErrorClass("first_name");
}

let firstNameEl = document.getElementById("first_name");

firstNameEl.addEventListener("keyup", onFirstNameKeyUp);