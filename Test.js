
var storeList = [];

function salmonStore(storeName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer){
  'use strict';
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.storeOpenTime = 6;
  this.storeCloseTime = 8;
  this.storeOpenHours = 0;
  this.estimatedCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  this.randomCustomersPerHour = function() {
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  };

  this.simulateCookies = function() {
    this.storeOpenHours = this.storeCloseTime + 12 - this.storeOpenTime + 1;
    //console.log(this.storeOpenHours);
    for ( var i = 0; i < this.storeOpenHours; i++) // fixme assumes store open before noon, close after noon.
    {
      this.estimatedCookiesPerHour[i] = Math.round(this.randomCustomersPerHour() * this.averageCookiesPerCustomer);
    //  console.log( i + ', ' + this.estimatedCookiesPerHour[i]);
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
    console.log(this.totalCookiesPerDay);
  };
  this.makeRow = function() {
    var appendRows = document.getElementById('append-rows');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = this.storeName;
    tr.appendChild(th);

    for ( var i = 0 ; i < this.estimatedCookiesPerHour.length ; i++){
      var td = document.createElement('td');
      td.textContent = this.estimatedCookiesPerHour[i];
      tr.appendChild(td);
    //  console.log('per hour' + this.estimatedCookiesPerHour[i]);
    }
    var newTd = document.createElement('td');
    newTd.value = this.totalCookiesPerDay;
    newTd.textContent = this.totalCookiesPerDay;
    tr.appendChild(newTd);
    appendRows.appendChild(tr);
  };

  this.simulateCookies();
}

storeList.push(new salmonStore('Pike Place', 17, 88, 5.2));
storeList.push(new salmonStore('Seatac Airport', 6, 18, 1.2));
storeList.push(new salmonStore('South Center', 11, 38, 1.9));
storeList.push(new salmonStore('Belleuve Square', 20, 48, 3.3));
storeList.push(new salmonStore('Alki', 3, 24, 2.6));

function salesReport(){
  var allCookies = 0;
  for ( var i = 0 ; i < storeList.length ; i ++){
    storeList[i].makeRow();
    allCookies += storeList[i].totalCookiesPerDay;
  }
  var myTotal = document.getElementById('append-total');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);

  for ( var j = 0 ; j < storeList[0].estimatedCookiesPerHour.length ; j++){
    var td = document.createElement('td');
    td.textContent = '';
    tr.appendChild(td);
  }
  var newTd = document.createElement('td');
  newTd.value = allCookies;
  newTd.textContent = allCookies;
  tr.appendChild(newTd);
  myTotal.appendChild(tr);

  // myTotal.textContent = allCookies;
  // document.body.appendChild(myTotal);
}
salesReport();
