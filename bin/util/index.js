const fs = require("fs");

function showHelp() {
  console.log("\nUsage: rwlog path_to_log_file -t [json || text]");
  console.log("\nOptions:\r");
  console.log("     -t\t\t\t" + "Convert option" + "\t\t" + "[json || text]\r");
  console.log("     -h,--help\t\t" + "Show help" + "\t\t" + "[boolean]\n");
}

function fileReader(filePath, cb) {
  fs.readFile(filePath, "utf-8", (err, fileData) => {
    if (err) return cb && cb(err);

    cb && cb(null, fileData);
  });
}

function converter(filePath, data, type, to) {
  const split = filePath.split(".");
  type = type === "text" ? "txt" : type;
  const saveTo = to || `${split[0]}.${type}`;

  fs.writeFile(saveTo, data, (err) => {
    if (err) return console.error(err);
    console.log("file saved");
  });
}

module.exports = {
  showHelp: showHelp,
  fileReader: fileReader,
  converter: converter,
};
