'use strict';

var cooksShopSeaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  //function to include a random customer function. This includes a var which value starts at 15 the amount of hours. As long a i is greater
  //than 0 it will keep counting down by 1 everytime. This is accomplished by using math.floor and math random
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      //Here I'm calling to math functions to pull a random number and round to the nearest whole number also setting parameters to keep it between max/min
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    }
    console.log(this.totalCustEachHour);
  }
};

var cooksShopSeaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 63.7,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    }
    console.log(this.totalCustEachHour);
  }
};
var cooksShopCapHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    }
    console.log(this.totalCustEachHour);
  },
  printCookies: function() {


  }
};

var cooksShopAlki = {
  minCust: 2,
  maxCust: 16,
  avgCookiePerCust: 4.6,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    }
    console.log(this.totalCustEachHour);
  }
};

var cooksShopFirstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for (var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    }
  }
};



cooksShopFirstPike.randomCust();
cooksShopSeaTac.randomCust();
cooksShopSeaCenter.randomCust();
cooksShopCapHill.randomCust();
cooksShopAlki.randomCust();
