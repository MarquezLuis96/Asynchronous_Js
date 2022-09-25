import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi) {
    const response = fetch(ulrApi, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

const idToDelete = 216;

deleteData(`${API}/products/${idToDelete}`)
.then(() => {
    console.log("Borrado Exitosamente");
});