import tagLine from "../ui/tagline";
import header from "../ui/header";

const pageHeader = document.createElement("header");

pageHeader.classList.add("page-header"); // add class to page header
pageHeader.appendChild(makeElement(logo()));

pageHeader.append(makeElement(tagLine("Get it all Done !", "tagline")));

const linkELm = link("Let's go", "/todo");
linkELm.classList.add("ui-header-link");
pageHeader.append(linkELm);

return pageHeader;
