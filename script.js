const form = document.getElementById('add-product-form');
const tableBody = document.querySelector("tbody");

function addProduct(event) {
    event.preventDefault();
    
    let category = event.target['productCategory'].value;
    let name = event.target['productName'].value;
    let price = event.target['productPrice'].value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td><button>Edit</button><button>Delete</button></td>
    `; 
    tableBody.appendChild(newRow);

    console.log(category, name, price);

}

form.addEventListener("submit", addProduct);