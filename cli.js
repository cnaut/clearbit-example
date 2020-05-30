var clearbit = require('clearbit')('');

var args  = process.argv.slice(2);
var arg = args[0];

if (!arg) {
  console.error('Usage: cli.js [email|domain]')
  process.exit(1);
}

if (arg.includes("@")) {
  clearbit.Enrichment.find({email: arg, stream: true})
  .then(function (lookup) {
    console.log(lookup);
  })
  .catch(clearbit.Enrichment.NotFoundError, function (err) {
    console.log(err);
  })
  .catch(function (err) {
    console.error(err);
  });
} else {
  clearbit.Enrichment.find({domain: arg, stream: true})
  .then(function (lookup) {
    console.log(lookup);
  })
  .catch(clearbit.Enrichment.NotFoundError, function (err) {
    console.log(err);
  })
  .catch(function (err) {
    console.error(err);
  });
}

