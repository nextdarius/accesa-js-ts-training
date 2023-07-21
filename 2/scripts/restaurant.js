var currentTable;

function toggleStatus(element) {
  if (element.classList.contains('restaurant-table-open')) {
    element.classList.remove('restaurant-table-open');
    element.classList.add('restaurant-table-closed');
    element.textContent = 'CLOSED';
  } else {
    element.classList.remove('restaurant-table-closed');
    element.classList.add('restaurant-table-open');
    element.textContent = 'OPEN';
  }
}

function showModal(tableNumber) {
  currentTable = tableNumber;
  var modal = document.getElementById('restaurant-modal');
  modal.style.display = 'block';
  var modalTitle = document.getElementById('restaurant-modal-title');
  modalTitle.textContent = 'Table ' + tableNumber;
}

function hideModal() {
  var modal = document.getElementById('restaurant-modal');
  modal.style.display = 'none';
}

function addProduct() {
  console.log('table', currentTable);
  var productSelection = document.getElementById('restaurant-modal-select');
  var value = productSelection.value;
  console.log(value);
  var currentCheckJSON = localStorage.getItem(currentTable);
  var currentCheck;
  if (currentCheckJSON) {
    currentCheck = JSON.parse(currentCheckJSON);
  } else {
    currentCheck = [];
  }
  currentCheck.push(value);
  localStorage.setItem(currentTable, JSON.stringify(currentCheck));
  console.log(localStorage.getItem(currentTable));
}
