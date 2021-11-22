import landingPage from "../pages/home/";
import notFound from "../pages/notFound";
import deletePage from "../pages/delete/";
import toDoList from "../pages/todolist/";
import createPage from "../pages/create";
import editPage from "../pages/edit";

/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/
// Routing table
const routes = {
  "/": landingPage,
  "/todo": toDoList,
  "/delete": deletePage,
  "/edit": editPage,
  "/create": createPage,
  "/*notFound": notFound,
};
// params that is page data......
const Router = function (pathname, params = null) {
  const isValidRoute = Object.keys(routes).find((key) => key === pathname);

  // loading and unloading pages into the div app
  const app = document.querySelector("#app");
  app.innerHTML = "";

  window.history.pushState({}, pathname, window.location.origin + pathname);

  // app.appendChild(routes[window.location.pathname]())
  if (isValidRoute === undefined) {
    app.appendChild(notFound());
  } else {
    app.appendChild(routes[isValidRoute](params));
  }
};

export { Router };
