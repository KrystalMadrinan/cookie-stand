'use strict';


ShopLocation.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

ShopLocation.allShops = [];
ShopLocation.tabledataEl = document.getElementById('tableData');
ShopLocation.allShopsTotal =[];


// CONSTRUCTOR FUNCTION

function ShopLocation(shopName, minCust, maxCust, avgCookie) {
  this.shopName = shopName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalCookiesPerHour = [];
  this.grandTotalCookies = 0;
  ShopLocation.allShops.push(this);
  //generate the cookies
  this.generateCookiesPerHour();
  //generate shop row
  this.renderShopRow();
}

console.log('ShopLocation.allshops: ', ShopLocation.allShops);


// random number creator
var randomCustomerNum = function(min, max) {
  return Math.random() * ((max-min) + 1) + min;
};

ShopLocation.prototype.generateCookiesPerHour = function() {
  for (var i = 0; i < ShopLocation.hours.length; i++) {
    var cookie = Math.ceil(this.avgCookie * randomCustomerNum(this.minCust, this.maxCust));
    this.totalCookiesPerHour.push(cookie);
    this.grandTotalCookies += cookie;
    ShopLocation.allShopsTotal =+ cookie;
  }
  console.log('+++++++++++', this.grandTotalCookies);
};

var renderHeaderRow = function() {
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = 'Location';
  trEL.appendChild(thEL);

  for (var i = 0; i < ShopLocation.hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = ShopLocation.hours[i];
    trEL.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = 'Daily Location Total';
  trEL.appendChild(tdElem);
  ShopLocation.tabledataEl.appendChild(trEL);
};
renderHeaderRow();


ShopLocation.prototype.renderShopRow = function() {
  var trEL = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.shopName;
  trEL.appendChild(tdEl);

  for(var i = 0; i < this.totalCookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEL.appendChild(tdEl);
  }
  // below shows total
  var tdElem = document.createElement('td');
  tdElem.textContent = this.grandTotalCookies;
  trEL.appendChild(tdElem);
  ShopLocation.tabledataEl.appendChild(trEL);
};

new ShopLocation('Seattle', 23, 65, 6.3);
new ShopLocation('Tokyo', 3, 24, 1.2);
new ShopLocation('Dubai', 11, 38, 3.7);
new ShopLocation('Paris', 20, 38, 2.3);
new ShopLocation('Lima', 2, 16, 4.6);

var renderFooterRow = function() {
  var trEL = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals: ';
  trEL.appendChild(tdEl);

  for ( var i = 0; i < ShopLocation.hours.length; i++) {
    var shopHourlyTotals = 0;
    var td = document.createElement('td');

    for (var j = 0; j < ShopLocation.allShops.length; j++) {
      shopHourlyTotals += ShopLocation.allShops[j].totalCookiesPerHour[i];
    }
    td.textContent = shopHourlyTotals;
    trEL.appendChild(td);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = ShopLocation.allShopsTotal;
  trEL.appendChild(tdElem);
  ShopLocation.tabledataEl.appendChild(trEL);

  // var finalGrandTotal = 0;
  // for (var k = 0; k < ShopLocation.allShops.length; k++) {
  //   finalGrandTotal += ShopLocation.allShops[k].allShopsTotal;
  // }
  var lastGrandTotal = document.createElement('td');

  //++++++this.grandTotalCookies is where the problem is++++++++++++++

  lastGrandTotal.textContent = this.grandTotalCookies;
  trEL.appendChild(lastGrandTotal);

  console.log('renderFooterRow: ', renderFooterRow);

  ShopLocation.tableBodyEl.appendChild(trEL);
};

renderFooterRow();

console.log(ShopLocation.allShops);


// FORM STARTS HERE

var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  console.log('ev target El name: ', event.target.inputElementName.value);
  var shopName = event.target.inputElName.value;
  var minCust = event.target.inputElMinCust.value;
  var maxCust = event.target.inputElMaxCust.value;
  var avgCookies = event.target.inputAvgCookies.value;

  if(isNaN(minCust)) {
    alert('No. Enter a number.');
    event.target.inputElMinCust.value = null;
  }

  renderNewRow.newRow = document.getElementById('userForm');
  var renderNewRow = function() {
    var trEL = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'New Row: ';
    trEL.appendChild(tdEl);
  };
  renderNewRow();
}
