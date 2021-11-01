// ="uiHeader" is just making a default
// naming this index.js in header folder will make pathing auto path here

const header = function (title = "uiHeader", className = "ui-header") {
  // creating html and using template literals
  const element = `<h1 class="${className}">${title}</h1>`;
  return element;
};

export default header;
