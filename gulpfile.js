// Common Js Modules, not es6 modules
// node => javascript run time / server side Javascript
// is a runtime, means it will run on the machine

//Can use this on on local server if node installed and on netlify

// -----COPY STATIC TO DIST------
const { src, dest } = require("gulp");

const static = function (cb) {
  // task
  // set src folder and move to destination
  return src("src/static/data/*.*").pipe(dest("dist/data"));

  //call the callback function
  cb();
};

exports.default = static;
