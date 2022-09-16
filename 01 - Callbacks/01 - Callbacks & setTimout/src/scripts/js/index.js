// The example above is for greeting people by name. The name is requested by prompt.

// function saludar(nombre) {
//     alert("Hola " + nombre + "!");
// }

// function procesarNombre(callback) {
//     var nombre = prompt("Ingresa tu nombre: ");
//     callback(nombre);
// }

// procesarNombre(saludar);


// The following example is for performing operations using callbacks

function add(num1, num2) {
    return num1 + num2;
}

function subs(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if(num2 === 0) {
        window.alert("ERROR: Division by 0 doesn't exist.");
    }
    else {
        return num1 / num2;
    }
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

//setTimeout Example
// setTimeout(function () {
//     console.log("Hello World!");
// }, 5000);

function greetings(name) {
    console.log(`Hello! my name is ${name}.\nYou can type the functions here, in the console.`);
}

setTimeout(greetings, 2000, 'Luis');


// runcode(callback) - Executes the function in the argument with 5 seconds of delay.
function runcode(callback) {
    window.setTimeout(callback, 5000);
}