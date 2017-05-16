'use strict';

//var for the hours so we can print this out wiht the data
var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

//object that is created with attributes
function Cookshop (local, minimum, max, avgcookie, totalCustHour, totalCookHour) {
  this.local = local;
  this.minimum = minimum;
  this.max = max;
  this.avgcookie = avgcookie;
  this.totalCustHour = totalCustHour;
  this.totalCookHour = totalCookHour;
}

Cookshop.prototype.randomCust = function() {
  for( var i = 14; i > 0; i--) {
    this.totalCustEachHour.push ((Math.floor (Math.random() * (this.max - this.minimum + 1))) + this.minimum);
  }
};

Cookshop.prototype.cookPerHour = function() {
  for( var i = 0; i <= 14; i++) {
    this.totalCookHour.push (Math.floor (this.totalCustHour[i] * this.avgcookie));
  }
}




var cookFirstPike = new Cookshop('First and Pike', 23, 65, 6.3);
var cookSeaTac = new Cookshop('Seatac Airport', 3, 24, 1.2);
var cookSeaCenter = new Cookshop('Seattle Center', 11, 38, 3.7);
var cookCapHill = new Cookshop('Capitol Hill', 20, 38, 3.2);
var cookAlki = new Cookshop('Alki', 2, 16, 4.6);

var cookieShops = [cookAlki, cookCapHill, cookFirstPike, cookSeaTac, cookSeaCenter];



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
  var newText = document.createTextNode(shopName.local);
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
