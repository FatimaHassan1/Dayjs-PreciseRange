// Step 1: Install the plugin
npm install moment-precise-range



// Step 2: Require the plugin in your code
var moment = require('moment');
require('moment-precise-range');





// Step 3: Use the plugin
var startDate = moment("2022-01-01", "YYYY-MM-DD");
var endDate = moment("2022-01-31", "YYYY-MM-DD");
var diff = moment.preciseDiff(startDate, endDate);
console.log(diff);
