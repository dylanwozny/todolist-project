import makeElement from "../../../utils/makeElement";
import { Router } from "../../../routes/router";

const onRequestPage = function (e) {
  e.preventDefault();
  Router(e.currentTarget.dataset.path);
  return false;
};

const link = function (label = "ui link", path = "/", className = "ui-link") {
  const template = `<a href="${path}" data-path="${path}">${label}</a>`;
  const element = makeElement(template);
  element.addEventListener("click", onRequestPage);

  return element;
};

export default link;
