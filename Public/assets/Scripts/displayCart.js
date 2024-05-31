// Retrieve the cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select the HTML element to display the cart items
const cartItemsContainer = document.getElementById("cartItems");

// Create a table
const table = document.createElement("table");

// Create the table headers
const headerRow = document.createElement("tr");
const headers = ["ID", "Name", "Price"];
headers.forEach((headerText) => {
  const header = document.createElement("th");
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Render the cart items as table rows
cart.forEach((item) => {
  const row = document.createElement("tr");

  const cellId = document.createElement("td");
  cellId.textContent = item.id;
  cellId.setAttribute("data-label", "Product ID");
  row.appendChild(cellId);

  const cellName = document.createElement("td");
  cellName.textContent = item.name;
  cellName.setAttribute("data-label", "Product Name");
  row.appendChild(cellName);

  const cellPrice = document.createElement("td");
  cellPrice.textContent = item.price;
  cellPrice.setAttribute("data-label", "Price");
  row.appendChild(cellPrice);

  table.appendChild(row);
});

// Append the table to the container
cartItemsContainer.appendChild(table);
