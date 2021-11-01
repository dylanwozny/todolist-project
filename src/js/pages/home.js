// creating html with javascript

import logo from "../components/icons/logo";
import makeElement from "../utils/makeElement";
import link from "../components/ui/link";
import header from "../components/ui/header";
import tagLine from "../components/ui/tagline";

// grab components fron landing page and add together
const landingPage = function () {
  const pageHeader = document.createElement("header");

  pageHeader.classList.add("page-header"); // add class to page header
  pageHeader.appendChild(makeElement(logo()));

  pageHeader.append(makeElement(tagLine("Get it all Done !", "tagline")));

  const linkELm = link("Let's go", "/todo");
  linkELm.classList.add("ui-header-link");
  pageHeader.append(linkELm);

  return pageHeader;
};

export default landingPage;
