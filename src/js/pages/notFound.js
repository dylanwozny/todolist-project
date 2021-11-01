import makeElement from "../utils/makeElement";
import link from "../components/ui/link";

const notFound = function () {
  const page = document.createElement("div");
  let headerTemplate = `<header class="page-not-found center-in-page">
      <h1>404</h1>
      <p>Page not Found</p>
    </header>`;

  const pageHeader = makeElement(headerTemplate);
  const homeLink = link("todo list", "/todo");

  pageHeader.append(homeLink);
  page.append(pageHeader);

  return page;
};

export default notFound;
