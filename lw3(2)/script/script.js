 
  
   
    
     window.onload = function() {

  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  var isInAscending = true;

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }

  function deleteElements(list, element) {
    var elementPosition = list.indexOf(element);
    if (elementPosition > -1) {
      list.splice(elementPosition, 1);
    }
  }

  function newElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      return -1;
    }
    elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      return -1;
    }
    listingElements.push(element);
    return 1;
  }

  function newNameElement(element, newValue) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements[elementPosition] = newValue;
    }
    elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements[elementPosition] = newValue;
    }
  }

  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  var addStoreButton = document.querySelector('#add-store-button');

  addStoreButton.onclick = function() {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  }

  var addListingButton = document.querySelector('#add-listing');

  addListingButton.onclick = function() {
    var selectedOption = document.querySelector('.store-select option:checked');
    addToListingElements(selectedOption.innerText);
    updateUI();
  }

  var deleteButton = document.querySelector('#delete-element');

  deleteButton.onclick = function() {
    var selectedOption = document.querySelector('.store-select option:checked');
    if (selectedOption !== null) {
      deleteElements(storeElements, selectedOption.innerText);
    } else {
      selectedOption = document.querySelector('.listing-select option:checked');
      deleteElements(listingElements, selectedOption.innerText);
    }
    updateUI();
  }

  var newElementButton = document.querySelector('#new-element');

  newElementButton.onclick = function() {
    var newElement = prompt("Введите название нового элемента");
    var result = newElements(newElement);
    updateUI();
  }

  var renameButton = document.querySelector('#rename');

  renameButton.onclick = function() {
    var selectedOption = document.querySelector('.store-select option:checked');
    if (selectedOption === null) {
      selectedOption = document.querySelector('.listing-select option:checked');
    }
    var newValue = prompt("Новое название элемента");
    newNameElement(selectedOption.innerText, newValue);
    updateUI();
  }
};
