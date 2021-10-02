#! /usr/bin/env node
const utils = require("./util");
const yargs = require("yargs");

if (
  (yargs.argv.t !== "json" && yargs.argv.t !== "text") ||
  yargs.argv.help ||
  yargs.argv.h ||
  !yargs.argv._[0]
) {
  utils.showHelp();
  return;
}

utils.fileReader(yargs.argv._[0], (err, data) => {
  if (err) return console.log("File not found!");
  else utils.converter(yargs.argv._[0], data, yargs.argv.t, yargs.argv.o);
});
