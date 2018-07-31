let packageJSON = require('./package.json');
let program = require('commander');
let scrapper = require('google-play-scrapper');

program
   .version(packageJSON.version)
   .option('-a, --app', 'Link to Google Play')
   .parse(process.argv);

if (!program.app) {
   console.error('Invalid arguments. Use `google-play-scrapper-cli --help` for help.');
} else {
   scrapper.app({appId: program.app})
      .then(console.log, console.error);
}