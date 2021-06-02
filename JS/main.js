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
    addErrorClass("first_name");
    addErrorClass("last_name");
    addErrorClass("address");
}

// addErrorClass("last_name");

window.setTimeout(addErrorClassToAllInputs, 2000);