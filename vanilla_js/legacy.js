
// #region January 13, 2020 – 13:55
const moment = require('moment');

let cache = [
  { id: "josiahjswab2020-01-11", username: "josiahjswab", points: 49 },
  { id: "Puffshere2020-01-11", username: "Puffshere", points: 27 }
];

let username = 'josiahjswab';
let yesterday = moment().subtract(1, 'day').format('YYYY-MM-DD');

var found = false;
for(var i = 0; i < cache.length; i++) {
  if (cache[i].id == (username + yesterday)) {
    found = true;
    break;
  }
}
console.log(found);
// #endregion
