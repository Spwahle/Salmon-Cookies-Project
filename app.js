'use strict';

var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

//This is creating the constructor for my use to organize shops

function CookShop(loca, minimum, max, avgPerCust) {
  this.loca = loca;
  this.minimum = minimum;
  this.max = max;
  this.avgPerCust = avgPerCust;
  this.totalCustEachHour = [];
  this.totalCookiesPerHour = [];
}
//my first method is is a randomCust function that floors a random number and multiplies it so it's with min-max
CookShop.prototype.randomCust = function() {

  for (var i = 14; i > 0; i--) {
    this.totalCustEachHour.push((Math.floor(Math.random() * (this.max - this.minimum + 1))) + this.minimum);
  }
};
//my second is a method that calls a for loop
CookShop.prototype.cookiesPerHour = function() {

  for (var i = 0; i <= 13; i++) {
    this.totalCookiesPerHour.push(Math.floor(this.totalCustEachHour[i] * this.avgPerCust));

  }
};
//my last method creates tr and th
CookShop.prototype.salesReportTableRows = function() {
  var newElement = document.createElement('tr');
  newElement.id = this.loca + ' row';
  var position = document.getElementById('salesReportTable');
  position.appendChild(newElement);

  newElement = document.createElement('th');
  var crText = document.createTextNode(this.loca);
  newElement.appendChild(crText);
  position = document.getElementById(this.loca + ' row');
  position.appendChild(newElement);

  var total = 0;

  for (var i in this.totalCookiesPerHour) {

    total += this.totalCookiesPerHour[i];
  }

  this.totalCookiesPerHour.push(total);


  for (i = 0; i <= hoursOfOperation.length; i++) {
    newElement = document.createElement('td');
       // newElement.id = 'countMe '+ i;

    crText = document.createTextNode(this.totalCookiesPerHour[i]);
    newElement.appendChild(crText);
    position = document.getElementById(this.loca + ' row');
    position.appendChild(newElement);
  }
};

var CookShopFirstPike = new CookShop('First and Pike', 23, 65, 6.3);
var CookShopSeatacAirport = new CookShop('Seatac Airport', 3, 24, 1.2);
var CookShopSeattleCenter = new CookShop('Seattle Center', 11, 38, 3.7);
var CookShopCapitolHill = new CookShop('Capitol Hill', 20, 38, 3.2);
var CookShopAlki = new CookShop('Alki', 2, 16, 4.6);

var CookShops = [CookShopFirstPike, CookShopSeatacAirport, CookShopSeattleCenter, CookShopCapitolHill, CookShopAlki];


for (var i = 0; i < CookShops.length; i++) {

  CookShops[i].randomCust();
  CookShops[i].cookiesPerHour();
}
console.log(CookShops);


function salesReportTableHead(CookShops) {

  var newElement = document.createElement('table');
  newElement.id = 'salesReportTable';
  var position = document.getElementById('body');
  position.appendChild(newElement);

  newElement = document.createElement('thead');
  newElement.id = 'colHeaders';
  position = document.getElementById('salesReportTable');
  position.appendChild(newElement);

  newElement = document.createElement('tr');
  newElement.id = 'colHeadersRow';
  position = document.getElementById('colHeaders');
  position.appendChild(newElement);

  newElement = document.createElement('th');
  position = document.getElementById('colHeadersRow');
  position.appendChild(newElement);


  for (var i = 0; i < hoursOfOperation.length; i++) {

    newElement = document.createElement('th');
    var crText = document.createTextNode(hoursOfOperation[i]);
    newElement.appendChild(crText);
    position = document.getElementById('colHeadersRow');
    position.appendChild(newElement);
  }

  newElement = document.createElement('th');
  var crText = document.createTextNode('Daily Location Total');
  newElement.appendChild(crText);
  position = document.getElementById('colHeadersRow');
  position.appendChild(newElement);
}


var cookieTotalsPerHourAllShops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (i = 0; i < hoursOfOperation.length; i++) {
  cookieTotalsPerHourAllShops[i] = cookieTotalsPerHourAllShops[i] + CookShops[0].totalCookiesPerHour[i] + CookShops[1].totalCookiesPerHour[i] + CookShops[2].totalCookiesPerHour[i] + CookShops[3].totalCookiesPerHour[i] + CookShops[4].totalCookiesPerHour[i];
}

var total = 0;
for (i in cookieTotalsPerHourAllShops) {

  total += cookieTotalsPerHourAllShops[i];
}

cookieTotalsPerHourAllShops.push(total);

console.log(cookieTotalsPerHourAllShops);


function salesReportTableFoot() {

  var newElement = document.createElement('tfoot');
  newElement.id = 'colTotals';
  var position = document.getElementById('salesReportTable');
  position.appendChild(newElement);

  newElement = document.createElement('tr');
  newElement.id = 'colTotalsRow';
  position = document.getElementById('colTotals');
  position.appendChild(newElement);

  newElement = document.createElement('th');
  var crText = document.createTextNode('Totals:');
  newElement.appendChild(crText);
  position = document.getElementById('colTotalsRow');
  position.appendChild(newElement);


  for (var i = 0; i <= hoursOfOperation.length; i++) {

    newElement = document.createElement('td');
    crText = document.createTextNode(cookieTotalsPerHourAllShops[i]);
    newElement.appendChild(crText);
    position = document.getElementById('colTotalsRow');
    position.appendChild(newElement);
  }
}

salesReportTableHead(CookShops);


for (i = 0; i < CookShops.length; i++) {

  CookShops[i].salesReportTableRows();
}

salesReportTableFoot();
