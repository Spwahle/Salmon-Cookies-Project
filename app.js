//creating an object with the variables min, max, avg, and random customer function
var salmonCooks = {
   minCust: 0,
   maxCust: 0,
   avgCookies: 0,
   randCust: function () {
     return Math.floor(Math.random() * maxCust) + minCust;
   },
   cookieCount: [],

  dailySales: function () {
     var cookieTotal = 0;
     var randSale;
     for (var i = 0; i < 15; i++) {
       randSale = randCust() * avgCookies;
       cookieTotal += randSale;
       cookieCount.push(randSale);
     }
     cookieCount.push(cookieTotal);
   }
 };

 cookieCount.push(cookieTotal);
   }
 };

var pikeShop = new salmonCooks();
pikeShop.minCust = 23;
pikeShop.maxCust = 65;
pikeShop.avgCookies = 6.3;

var airportShop = new salmonCooks();
airportShop.minCust = 3;
airportShop.maxCust = 24;
airportShop.avgCookies = 12;

var centerShop = new salmonCooks();
centerShop.minCust = 11;
centerShop.maxCust = 38;
centerShop.avgCookies = 3.7;

var hillShop = new salmonCooks();
hillShop.minCust = 20;
hillShop.maxCust = 38;
hillShop.avgCookies = 2.3;

var alkiShop = new salmonCooks();
alkiShop.minCust = 2;
alkiShop.maxCust = 16;
alkiShop.avgCookies = 4.6;














  randomVisitorsPerHour: function getRandomIntInclusive () {
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  },
  randomCookiesPerHour: function () {
    return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
  },
  cookies: [],
  customers: [],
  dailyTotal: 0
};

randomVisitorsPerHour: function getRandomIntInclusive ()
{    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
   }
   randomCookiesPerHour: function()
   {
     return Math.floor(this.randomVisitorsPerHour() * this.averageCookiesPerHour);
   },
