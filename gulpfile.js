//Can use this on on local server if node installed and on netlify
//Can use this on on local server if node installed and on netlify

// -----COPY STATIC TO DIST------
// -----COPY STATIC TO DIST------
const { src, dest } = require("gulp");

const static = function (cb) {
  // task
  // task
  // set src folder and move to destination
  // set src folder and move to destination
  return src("src/static/data/*.*").pipe(dest("dist/data"));

  //call the callback function
  cb();
};

exports.default = static;
