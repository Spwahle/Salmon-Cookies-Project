'use strict';

 var hours = array['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

 var randomNumber;
 var minCustomers;
 var maxCustomers;
 var avgCookies;
 var totalCookies;
 var cookiesPerHour;
 var customersPerHour;
 var cookieInfo;
 var locationAr;
 var firstPike;
 var seaTac;
 var seaCenter;
 var alki;
 var capHill;

 function randomNumber(minCustomers, maxCustomers) {

 firstPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,

 cookiesPerHour: function() {
  title: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  locationAr: [],
  customersPerHour: function() {
     return randomNumber(this.minCustomers, this.maxCustomers);
  }
  },
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var totalCookies = Math.round(this.avgCookies * this.customersPerHour());
     this.locationAr.push(hours[i] + ' = ' + totalCookies);
     this.cookieInfo = totalCookies + this.cookieInfo;
  },
 }

 seaTac = {
  minCustomers: 3;
  maxCustomers: 24;
  avgCookies: 1.2;
  cookiesPerHour: function() {
  title: 'SeaTac',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  locationAr: [],
  customersPerHour: function() {
     return randomNumber(this.minCustomers, this.maxCustomers);
  }
  },
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var totalCookies = Math.round(this.avgCookies * this.customersPerHour());
     this.locationAr.push(hours[i] + ' = ' + totalCookies);
     this.cookieInfo = totalCookies + this.cookieInfo;
  },
  },
 }

 seaCenter = {
  minCustomers: 11;
  maxCustomers: 38;
  avgCookies: 3.7;
  cookiesPerHour: function() {
  title: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  locationAr: [],
  customersPerHour: function() {
     return randomNumber(this.minCustomers, this.maxCustomers);
  }
  },
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var totalCookies = Math.round(this.avgCookies * this.customersPerHour());
     this.locationAr.push(hours[i] + ' = ' + totalCookies);
     this.cookieInfo = totalCookies + this.cookieInfo;
  },
  },
 }

 capHill = {
  minCustomers: 20
  maxCustomers: 38
  avgCookies: 2.3;
  cookiesPerHour: function() {
  title: 'Capital Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  locationAr: [],
  customersPerHour: function() {
     return randomNumber(this.minCustomers, this.maxCustomers);
  }
  },
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var totalCookies = Math.round(this.avgCookies * this.customersPerHour());
     this.locationAr.push(hours[i] + ' = ' + totalCookies);
     this.cookieInfo = totalCookies + this.cookieInfo;
  },
  },
 }

 alki = {
  minCustomers: 2;
  maxCustomers: 16;
  avgCookies:2.6;
  cookiesPerHour: function() {
  title: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies:2.6,
  locationAr: [],
  customersPerHour: function() {
     return randomNumber(this.minCustomers, this.maxCustomers);
  }
  },
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var totalCookies = Math.round(this.avgCookies * this.customersPerHour());
     this.locationAr.push(hours[i] + ' = ' + totalCookies);
     this.cookieInfo = totalCookies + this.cookieInfo;
  },
 },
 }
