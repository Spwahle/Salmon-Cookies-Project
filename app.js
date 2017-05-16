'use strict';

//var for the hours so we can print this out wiht the data
var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

//object that is created with attributes
var cookFirstPike = {
  Local: 'First and Pike',
  minimum: 23,
  Max: 65,
  avgcookie: 6.3,
  totalCustHour: [],
  totalCookHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustHour.push ((Math.floor (Math.random() * (this.Max - this.minimum + 1))) + this.minimum);
    }
  },
  cookPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookHour.push (Math.floor (this.totalCustHour[i] * this.avgcookie));
    }
  },
};

var cookSeaTac = {
  Local: 'Seatac Airport',
  minimum: 3,
  Max: 24,
  avgcookie: 1.2,
  totalCustHour: [],
  totalCookHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustHour.push ((Math.floor (Math.random() * (this.Max - this.minimum + 1))) + this.minimum);
    }
  },
  cookPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookHour.push (Math.floor (this.totalCustHour[i] * this.avgcookie));
    }
  },
};

var cookSeaCenter = {
  Local: 'Seattle Center',
  minimum: 11,
  Max: 38,
  avgcookie: 63.7,
  totalCustHour: [],
  totalCookHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustHour.push ((Math.floor (Math.random() * (this.Max - this.minimum + 1))) + this.minimum);
    }
  },
  cookPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookHour.push (Math.floor (this.totalCustHour[i] * this.avgcookie));
    }
  },
};

var cookCapHill = {
  Local: 'Capitol Hill',
  minimum: 20,
  Max: 38,
  avgcookie: 2.3,
  totalCustHour: [],
  totalCookHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustHour.push ((Math.floor (Math.random() * (this.Max - this.minimum + 1))) + this.minimum);
    }
  },
  cookPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookHour.push (Math.floor (this.totalCustHour[i] * this.avgcookie));
    }
  },
};

var cookAlki = {
  Local: 'Alki',
  minimum: 2,
  Max: 16,
  avgcookie: 4.6,
  totalCustHour: [],
  totalCookHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustHour.push ((Math.floor (Math.random() * (this.Max - this.minimum + 1))) + this.minimum);
    }
  },
  cookPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookHour.push (Math.floor (this.totalCustHour[i] * this.avgcookie));
    }
  },
};

cookFirstPike.randomCust();
cookSeaTac.randomCust();
cookSeaCenter.randomCust();
cookCapHill.randomCust();
cookAlki.randomCust();

cookFirstPike.cookPerHour();
cookSeaTac.cookPerHour();
cookSeaCenter.cookPerHour();
cookCapHill.cookPerHour();
cookAlki.cookPerHour();

//Adding a new <h2> element for each shop.

function newSalesReport(shopName, shopNumber) {
  var newEl = document.createElement('h2');
  var newText = document.createTextNode(shopName.Local);
  newEl.appendChild(newText);
  var position = document.getElementsByTagName('div')[shopNumber-1];
  position.appendChild(newEl);

  var newEl = document.createElement('ul');
  var newText = document.createTextNode('Cookies per Hour');
  newEl.appendChild(newText);
  var position = document.getElementsByTagName('div')[shopNumber-1];
  position.appendChild(newEl);

  for (var i = 0; i < 15; i++) {
    var newEl = document.createElement('li');
    var newText = document.createTextNode(hoursOfOperation[i] + ': ' + shopName.totalCookHour[i]);
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('ul')[shopNumber-1];
    position.appendChild(newEl);
  }
    var newEl = document.createElement('li');
    var total=0;
    for(var i in shopName.totalCookHour) { total += shopName.totalCookHour[i]; }
    newText = document.createTextNode('Total cookies sold today: ' + total);
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('ul')[shopNumber-1];
    position.appendChild(newEl);
}

newSalesReport(cookFirstPike, 1);
newSalesReport(cookSeaTac, 2);
newSalesReport(cookSeaCenter, 3);
newSalesReport(cookCapHill, 4);
newSalesReport(cookAlki, 5);



for(var i = 0; i < cookieShop.length; i++) {
  cookieShop[i].randomCust();
  cookieShop[i].cookPerHour();
}

console.log(cookieShops);

for(var j = 0; j < cookieShop.length; j++) {
  newSalesReport(cookieShop[j], j + 1);
}
