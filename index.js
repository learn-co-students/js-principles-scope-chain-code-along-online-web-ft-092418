/* Your code goes here */
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "Homer";


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overWriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Marge";
}

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = "Bart";
  const favoriteCustomer = "Milhouse";
}
