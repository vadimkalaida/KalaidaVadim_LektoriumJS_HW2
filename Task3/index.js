let price = parseInt(prompt('Price:')),
  banknote = parseInt(prompt('Banknote(example: 50):')),
  priceInput = document.querySelector('#priceInput'),
  banknoteInput = document.querySelector('#banknoteInput');

if(isNaN(price) || price <= 0) {
  alert('Price/Banknote must be >= 0!!!');
  location.reload();
}

if(price > 10000 || banknote > 10000) {
  alert('Price/Banknote must be <= 10000!!!');
  location.reload();
}

if(price > banknote) {
  alert('Sorry but you don\'t have enough money');
  location.reload();
}

priceInput.value = price;
banknoteInput.value = banknote;