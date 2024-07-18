const form = document.getElementById('add-product-form');
const tableBody = document.getElementById("tbody");

function addProduct(event) {
    event.preventDefault();
    
    let category = event.target['product-category'].value;
    let name = event.target['product-name'].value;
    let price = event.target['product-price'].value;

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