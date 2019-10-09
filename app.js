'use strict';


ShopLocation.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

ShopLocation.allShops = [];
ShopLocation.tabledataEl = document.getElementById('tableData');
ShopLocation.allShopsTotal =[0];


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

// var shop = new ShopLocation('Seattle', 23, 65, 6.3);

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

var renderFooterRow = function() {
  var trEL = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals: ';
  trEL.appendChild(tdEl);

  for ( var i = 0; i <ShopLocation.hours.length; i++) {
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

};


new ShopLocation('Seattle', 23, 65, 6.3);
new ShopLocation('Tokyo', 3, 24, 1.2);
new ShopLocation('Dubai', 11, 38, 3.7);
new ShopLocation('Paris', 20, 38, 2.3);
new ShopLocation('Lima', 2, 16, 4.6);

renderFooterRow();
console.log(ShopLocation.allShops);


// renderShopRow();

// var tableBody = document.getElementById('tableElement');

// var renderHeaderRow = function() {
//   // trEl/thEL refers to table elements
//   var trEL = document.createElement('tr');
//   var thEL = document.createElement('th');
//   thEL.textContent = 'Location';
//   trEL.appendChild(thEL);


//   for (var i = 0; i < ShopLocation.hours.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = ShopLocation.hours[i];
//     trEL.appendChild(tdEl);
//   }
//   tableBody.appendChild(trEL);
// };
// renderHeaderRow();



///////////////////////////////////////////////////////


// var parentEl = document.getElementById('parentElement');

// var child = document.createElement('h1');
// child.textContent = 'Seattle: ';
// parentEl.appendChild(child);

// var seattle = {
//   shopHours,
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   sumRandNum: 0,

//   hourTotal: function () {
//     var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
//     this.sumRandNum += randNum;
//     return randNum;
//   },

//   render: function () {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       childEl.textContent = `${this.shopHours[i]}:  ${this.hourTotal()} cookies`;
//       parentEl.appendChild(childEl);
//     }
//     childEl.textContent = `Total: ${this.sumRandNum} cookies`;
//     parentEl.appendChild(childEl);
//   },
// };

// seattle.render();
// seattle.hourTotal();


// var tokyoChild = document.createElement('h1');
// tokyoChild.textContent = 'Tokyo: ';
// parentEl.appendChild(tokyoChild);

// var tokyo = {
//   shopHours,
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   sumRandNum: 0,

//   hourTotal: function() {
//     var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
//     this.sumRandNum += randNum;
//     return randNum;
//   },

//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       childEl.textContent = `${this.shopHours[i]}:  ${this.hourTotal()} cookies`;
//       parentEl.appendChild(childEl);
//     }
//     childEl.textContent = `Total: ${this.sumRandNum} cookies`;
//     parentEl.appendChild(childEl);
//   },
// };

// tokyo.render();
// tokyo.hourTotal();


// var dubaiChild = document.createElement('h1');
// dubaiChild.textContent = 'Dubai: ';
// parentEl.appendChild(dubaiChild);

// var dubai = {
//   shopHours,
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   sumRandNum: 0,

//   hourTotal: function() {
//     var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
//     this.sumRandNum += randNum;
//     return randNum;
//   },

//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       childEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
//       parentEl.appendChild(childEl);
//     }
//     childEl.textContent = `Total: ${this.sumRandNum} cookies`;
//     parentEl.appendChild(childEl);
//   },
// };

// dubai.render();
// dubai.hourTotal();


// var parisChild = document.createElement('h1');
// parisChild.textContent = 'Paris: ';
// parentEl.appendChild(parisChild);

// var paris = {
//   shopHours,
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   sumRandNum: 0,

//   hourTotal: function() {
//     var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
//     this.sumRandNum += randNum;
//     return randNum;
//   },

//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       childEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
//       parentEl.appendChild(childEl);
//     }
//     childEl.textContent = `Total: ${this.sumRandNum} cookies`;
//     parentEl.appendChild(childEl);
//   },
// };

// paris.render();
// paris.hourTotal();


// var limaChild = document.createElement('h1');
// limaChild.textContent = 'Lima: ';
// parentEl.appendChild(limaChild);

// var lima = {
//   shopHours,
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   sumRandNum: 0,

//   hourTotal: function() {
//     var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
//     this.sumRandNum += randNum;
//     return randNum;
//   },

//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       childEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
//       parentEl.appendChild(childEl);
//     }
//     childEl.textContent = `Total: ${this.sumRandNum} cookies`;
//     parentEl.appendChild(childEl);
//   },
// };

// lima.render();
// lima.hourTotal();
