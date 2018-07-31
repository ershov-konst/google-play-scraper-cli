let packageJSON = require('./package.json');
let program = require('commander');
let scraper = require('google-play-scraper');

program
   .version(packageJSON.version)
   .usage('google-play-scraper -a <appId>')
   .option('-A, --app <appId>', 'Application id in Google Play')
   .parse(process.argv);

if (!program.app) {
   program.help();
} else {
   scraper.app({appId: program.app})
      .then(console.log, console.error);
}