const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function changeImage(route) {
    document.getElementById('card--image').innerHTML = '<img src="`${route}`"/>';
}

function changeName(texto) {
    document.getElementById('card--name').innerHTML = '<h3>`${texto}`</h3>';
}

function changeCategorie(texto) {
    document.getElementById('card--categorie').innerHTML = '<h4>`${texto}`</h4>';
}

function changeDescription(texto) {
    document.getElementById('card--description').innerHTML = '<p>`${texto}`</p>';
}

function fetchApi(urlApi, callback) {

    // Creating the request object - class XMLHttpRequest
    let request = new XMLHttpRequest();

    // Opening connection with de url by get method
    request.open('GET', urlApi, true);

    request.onreadystatechange = function (event) {
        if(request.readyState === 0) {
            console.log("Connection no initialized...");
        }

        if(request.readyState === 1) {
            console.log("Loading connection...");
        }

        if(request.readyState === 2) {
            console.log("Executing connection...");
        }

        if(request.readyState === 3) {
            console.log("Processing...");
        }

        if(request.readyState === 4) {
            console.log("Completed.");
            if(request.status === 200) {
                // Getting data and parsing in a JSON
                callback(null, JSON.parse(request.responseText));
            }
            else {
                // Error
                const error = new Error("Error: " + urlApi);
                return callback(error, null);
            }
        }
    }

    // Sending the request
    request.send();
}

function changeCardValues() {
    let pid = document.getElementById('Id_number').value;

    fetchApi(`${API}/products`, pid,function (error1, data1) {
        if(error1) {
            return console.error(error1);
        }
        else {
            fetchApi(`${API}/products/${data1[pid].id}`, function (error2, data2) {
                if(error2) {
                    return console.error(error2);
                }
                else {
                    fetchApi(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
                        if(error3) {
                            return console.error(error3);
                        }
                        else {
                            console.log(data1[pid]);
                            console.log(data2.title);
                            changeName(data2.title)
                            console.log(data3.name);
                            changeCategorie(data3.name);
                            console.log(data3.image);
                            changeImage(data3.image)
                        }
                    });
                }
            });
        }
    });
}