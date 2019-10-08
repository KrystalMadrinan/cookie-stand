'use strict';
var parentEl = document.getElementById('parentElement');
// parentEl.textContent = 'attempting to contact html.';

var child = document.createElement('h1');
child.textContent = 'Seattle: ';
parentEl.appendChild(child);

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var seattle = {
  shopHours,
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  sumRandNum: 0,

  hourTotal: function() {
    var randNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandNum += randNum;
    return randNum;

  },


  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      // childEl.textContent = 'Shop Hours: ' + this.shopHours[i];
      childEl.textContent = `${this.shopHours[i]}:  ${this.hourTotal()} cookies`;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = `Total: ${this.sumRandNum} cookies`;
    parentEl.appendChild(childEl);
  },
};

seattle.render();
seattle.hourTotal();
