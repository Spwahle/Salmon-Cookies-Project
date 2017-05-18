'use strict';


var elForm = document.getElementById('store_form');

// constructor function to include attributes of local, min, max and avgPerCust
function StoreLocation(local, min, max, avgPerCust) {
  this.local = local;
  this.min = min;
  this.max = max;
  this.avgPerCust = avgPerCust;

  // creating a method that will take math random by a number between max and min, then rounding it to a whole

  this.randomCustomer = function() {
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  };

  // this piggy backs off the back of my last method. It takes the randomCustomer function and multiples it by a math.floor version of avg

  this.randomSales = function() {
    return Math.floor(this.randomCustomer() * this.avgPerCust);
  };
}

// creates a prototype method which
StoreLocation.prototype.render = function() {
  var elTable = document.getElementById('tablebody');
  var arrData = [];
  var elNewRow = document.createElement('tr');
  var cooks = 0;
  var totalCooks = 0;
  arrData.push('<td>' + this.local + '</td>');


  // loops through 14 times to add hours

  for (var i = 0; i < 14; i++) {
    cooks = this.randomSales();
    totalCooks = totalCooks + cooks;
    arrData.push('<td>' + cooks + '</td>');
  }
  arrData.push('<td>' + totalCooks + '</td>');
  elNewRow.innerHTML = arrData.join('');
  elTable.appendChild(elNewRow);
};

// function to grab data from form and store it in
function getFormData(event) {
  event.preventDefault();

  var local = event.target.inputlocal.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgPerCust = parseFloat(event.target.inputAvgPerCust.value);

  var newStore = new StoreLocation(local, min, max, avgPerCust);
  console.log(newStore);
  newStore.render();
  elForm.reset();
}

// function to print the header for the table
function printHeader() {
  var elHead = document.getElementById('tablehead');
  var arrData = [];
  var elRow = document.createElement('tr');
  arrData.push('<td></td>');
  // loops through and push the AM hours to the array
  for (var i = 6; i < 12; i++) {
    arrData.push('<td>' + i + ':00am' + '</td>');
  }
  arrData.push('<td>12:00pm</td>');
  // loops through and push the PM hours to the array
  for (var k = 1; k < 8; k++) {
    arrData.push('<td>' + k + ':00pm' + '</td>');
  }
  arrData.push('<td>Daily Location Total</td>');
  elRow.innerHTML = arrData.join('');
  elHead.appendChild(elRow);
}

// function to print the header for the table
function printFooter() {
  var elHead = document.getElementById('tablefoot');
  var arrData = [];
  var elRow = document.createElement('tr');
  arrData.push('<td>Totals</td>');
  // loops through and push the footer cells to the array
  for (var i = 1; i < 16; i++) {
    arrData.push('<td></td>');
  }
  elRow.innerHTML = arrData.join('');
  elHead.appendChild(elRow);
}

// create instances of the StoreLocation object
var cooksFirstAndPike = new StoreLocation('1st and Pike', 23, 65, 6.3);
var cookseatac = new StoreLocation('SeaTac Airport', 3, 24, 1.2);
var cookseattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7);
var cooksCapitolHill = new StoreLocation('Capitol Hill', 20, 38, 2.3);
var cooksAlki = new StoreLocation('Alki', 2, 16, 4.6);

// call functions and methods to print table to HTML
printHeader();
cooksFirstAndPike.render();
cookseatac.render();
cookseattleCenter.render();
cooksCapitolHill.render();
cooksAlki.render();
printFooter();

elForm.addEventListener('submit', getFormData);
=======
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

