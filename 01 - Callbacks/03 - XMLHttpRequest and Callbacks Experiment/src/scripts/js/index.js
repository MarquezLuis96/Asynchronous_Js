const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

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

fetchApi(`${API}/products`, function (error1, data1) {
    if(error1) {
        return console.error(error1);
    }
    else {
        fetchApi(`${API}/products/${data1[0].id}`, function (error2, data2) {
            if(error2) {
                return console.error(error2);
            }
            else {
                fetchApi(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
                    if(error3) {
                        return console.error(error3);
                    }
                    else {
                        console.log(data1[0]);
                        console.log(data2.title);
                        console.log(data3.name);
                    }
                });
            }
        });
    }
});