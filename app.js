'use strict';

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

//////////////////////////////////////////////////
// var tableBody = document.getElementById('tableElement');

// var renderHeaderRow = function() {
//   // trEl/thEL refers to table elements
//   var trEL = document.createElement('tr');
//   var thEL = document.createElement('th');
//   thEL.textContent = 'Location';
//   trEL.appendChild(thEL);


//   for (var i = 0; i < shopHours.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = shopHours[i];
//     trEL.appendChild(tdEl);
//   }
//   tableBody.appendChild(trEL);
// };
// renderHeaderRow();

// var renderSeattleRow = function() {
//   var trEL = document.createElement('t');
//   var thEL = document.createElement('th');
//   thEL.textContent = 'Seattle';
//   trEL.appendChild(thEL);

//   for (var i = 0; i < shopHours.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = shopHours[i];
//     trEL.appendChild(tdEl);
//   }
//   tableBody.appendChild(trEL);
// };
// renderSeattleRow();




// //constructor
// var allShops = [];

// function Location(minCust, maxCust, avgCookie, sumRandNum) {
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookie = avgCookie;
//   this.sumRandNum = sumRandNum;
//   this.hourTotal = hourTotal;

//   allShops.push(this);
// }


// // // Location.prototype.hourTotal = function() {
// // //   console.log(`${this.shopHours} testing`);

// // };


// var seattle = new Location(23, 65, 6.3, 0);
// var tokyo = new Location(3, 24, 1.2, 0);
// var dubai = new Location(11, 38, 3.7, 0);
// var paris = new Location(20, 38, 2.3, 0);
// var lima = new Location(2, 16, 4.6, 0);

// Location.prototype.hourTotal = function () {
//   var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
//   this.sumRandNum += randNum;

//   return randNum;
// };
// console.log(allShops);

// // for (var i = 0; i < allShops.length; i++) {
// //   allShops[i].avgCookie();
// // }

/////////////////////////////////////////////////////////


var parentEl = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Seattle: ';
parentEl.appendChild(child);

var seattle = {
  shopHours,
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  sumRandNum: 0,

  hourTotal: function () {
    var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandNum += randNum;
    return randNum;
  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}:  ${this.hourTotal()} cookies`;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = `Total: ${this.sumRandNum} cookies`;
    parentEl.appendChild(childEl);
  },
};

seattle.render();
seattle.hourTotal();


var tokyoChild = document.createElement('h1');
tokyoChild.textContent = 'Tokyo: ';
parentEl.appendChild(tokyoChild);

var tokyo = {
  shopHours,
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  sumRandNum: 0,

  hourTotal: function() {
    var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandNum += randNum;
    return randNum;
  },

  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}:  ${this.hourTotal()} cookies`;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = `Total: ${this.sumRandNum} cookies`;
    parentEl.appendChild(childEl);
  },
};

tokyo.render();
tokyo.hourTotal();


var dubaiChild = document.createElement('h1');
dubaiChild.textContent = 'Dubai: ';
parentEl.appendChild(dubaiChild);

var dubai = {
  shopHours,
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  sumRandNum: 0,

  hourTotal: function() {
    var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandNum += randNum;
    return randNum;
  },

  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = `Total: ${this.sumRandNum} cookies`;
    parentEl.appendChild(childEl);
  },
};

dubai.render();
dubai.hourTotal();


var parisChild = document.createElement('h1');
parisChild.textContent = 'Paris: ';
parentEl.appendChild(parisChild);

var paris = {
  shopHours,
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  sumRandNum: 0,

  hourTotal: function() {
    var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandNum += randNum;
    return randNum;
  },

  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = `Total: ${this.sumRandNum} cookies`;
    parentEl.appendChild(childEl);
  },
};

paris.render();
paris.hourTotal();


var limaChild = document.createElement('h1');
limaChild.textContent = 'Lima: ';
parentEl.appendChild(limaChild);

var lima = {
  shopHours,
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  sumRandNum: 0,

  hourTotal: function() {
    var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandNum += randNum;
    return randNum;
  },

  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = `Total: ${this.sumRandNum} cookies`;
    parentEl.appendChild(childEl);
  },
};

lima.render();
lima.hourTotal();
