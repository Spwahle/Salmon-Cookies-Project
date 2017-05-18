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
