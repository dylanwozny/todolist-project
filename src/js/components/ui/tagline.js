const tagLine = function (title = "uitag", className = "ui-header") {
  // creating html and using template literals
  const element = `<p class="${className}">${title}</p>`;
  return element;
};

export default tagLine;
