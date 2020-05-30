var clearbit = require('clearbit')('');

var args  = process.argv.slice(2);
var email = args[0];

if (!email) {
  console.error('Usage: cli.js [email]')
  process.exit(1);
}

clearbit.Enrichment.find({email: email, stream: true})
  .then(function (lookup) {
    console.log(lookup);
  })
  .catch(clearbit.Enrichment.NotFoundError, function (err) {
    console.log(err);
  })
  .catch(function (err) {
    console.error(err);
  });