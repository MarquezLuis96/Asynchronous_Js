import setch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function updateData(urlApi, updatedData) {
    const response = fetch(urlApi, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    });
    return response;
}

const idToUpdate = 216;

const dataToUpdate = {
    "title": "New Title",
    "price": 250
}

updateData(`${API}/products/${idToUpdate}`)
.then(response => response.json())
.then(
    console.log(`Article ${idToUpdate} succesfully updated`)
)
.catch(error => console.error("Error: " + error));