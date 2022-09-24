import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Asus ROG Strix G15",
    "price": 1750,
    "description": "ASUS ROG Strix G15 Gaming Laptop, 240Hz 15.6 inches FHD 3ms IPS, Intel Core i7-10750H CPU, NVIDIA GeForce RTX 2070, 16GB DDR4, 1TB PCIe SSD, RGB KB, Wi-Fi 6, Windows 10, G512LW-ES76",
    "categoryId": 1,
    "images": [
        "https://m.media-amazon.com/images/I/81aaaWX8UcL._AC_SS450_.jpg",
        "https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SY300_SX300_.jpg"
    ]
}

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));