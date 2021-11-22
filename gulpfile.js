// Common Js Modules, not es6 modules
// node => javascript run time / server side Javascript
// is a runtime, means it will run on the machine

//Can use this on on local server if node installed and on netlify

// -----COPY STATIC TO DIST------
const { src, dest, series } = require("gulp");

const static = function () {
  // task
  // set src folder and move to destination
  return src("src/static/**").pipe(dest("dist/data"));
};

function redirect() {
  return src("./_redirects").pipe(dest("./dist"));
}

exports.default = series(static, redirect);
