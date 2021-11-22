// creating html with javascript

import makeElement from "../../utils/makeElement";
import pageHeader from "../../components/ui/pageheader/";
import link from "../../components/ui/link/link";
// import tagLine from "../../components/ui/tagline";

// grab components fron landing page and add together
const editPage = function () {
  const page = document.createElement("div");

  // clean out page contents before building
  page.innerHTML = "";

  function render() {
    page.append(
      pageHeader({
        label: "Edit this To Do item",
        tagline: "Gotta get it all done",
        children: [link("To Do List", "/todo")],
      })
    );
  }

  // call functions to build page
  render();
  return page;
};

export default editPage;
