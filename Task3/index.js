let price = parseInt(prompt('Price:')),
  banknote = parseInt(prompt('Banknote(example: 50):')),
  allBanknotes = [1, 2, 5, 10, 20, 50, 100, 200, 500],
  changeBanknotes = [],
  priceInput = document.querySelector('#priceInput'),
  banknoteInput = document.querySelector('#banknoteInput'),
  changeInput = document.querySelector('#changeInput');

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

let change = banknote - price;

priceInput.value = price;
banknoteInput.value = banknote;
changeInput.value = change;

for(let i = allBanknotes.length - 1; i >= 0; i--) {
  while((change - allBanknotes[i]) >= 0) {
    change -= allBanknotes[i];
    changeBanknotes.push(allBanknotes[i]);
  }
}

document.querySelector('#changeBanknotesInput').value = changeBanknotes;

console.log(changeBanknotes);