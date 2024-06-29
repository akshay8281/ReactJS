function calculateSubtotal(quantity, price) {
    return parseFloat(quantity) * parseFloat(price);
}

function addRow(description, quantity, price) {
    const tbody = document.getElementById('bill-items');
    const newRow = document.createElement('tr');
    const subtotal = calculateSubtotal(quantity, price);

    newRow.innerHTML = `
    <td>${tbody.children.length + 1}</td>
    <td><input type="text" class="desInput" placeholder="Item Description" value="${description}" /></td>
    <td><input type="number" step="0.01" class="userInput" value="${quantity}" oninput="updateSubtotal(this, ${price})" /></td>
    <td><input type="number" step="0.01" class="userInput" value="${price}" oninput="updateSubtotal(this.parentElement.previousElementSibling.children[0], this.value)" /></td>
    <td>${subtotal.toFixed(2)}</td>
    <td><button class="remove-btn" onclick="removeRow(${tbody.children.length + 1})">Remove</button></td>
    `;

    tbody.appendChild(newRow);

    updateTotal();
}

function updateSubtotal(input, price) {
    const quantity = parseFloat(input.value);
    const row = input.closest('tr');
    const priceInput = row.querySelector('td:nth-child(4) input');
    priceInput.value = price;
    const priceValue = parseFloat(priceInput.value);
    const subtotalCell = row.querySelector('td:nth-child(5)');
    const subtotal = calculateSubtotal(quantity, priceValue);
    subtotalCell.textContent = subtotal.toFixed(2);

    updateTotal();
}


function updateTotal() {
    // Selects all subtotal cells and calculates the overall total
    const subtotalCells = document.querySelectorAll('#bill-items td:nth-child(5)');
    let total = 0;
    subtotalCells.forEach(cell => {
        total += parseFloat(cell.textContent);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}


function removeRow(id) {
    const row = document.querySelector(`#bill-items tr:nth-child(${id})`);
    row.remove();

    updateTotal();
}

// Example usage
addRow('', 0, 0); // Adds a row with description 'Item 1', quantity 2, and price 10
