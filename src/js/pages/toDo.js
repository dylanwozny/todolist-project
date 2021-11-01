import reducers from "../redux/reducer";
import directory from "../components/cards/toDoCard";
import button from "../components/ui/button/button";
import makeElement from "../utils/makeElement";
import link from "../components/ui/link";
import logo from "../components/icons/logo";
import toDoCardList from "../components/cards/toDoCard";
import { getStore } from "../redux/store";
import toDoItem from "../components/cards/toDoItems";
import { Router } from "../routes/router";

const toDoPage = function () {
  const page = document.createElement("div");

  // Delete handler function
  function onDeleteTodo(e) {
    // grabbing id
    const toDoId = e.currentTarget.parentElement.dataset.key;
    Router("/delete", toDoId);

    console.log(e.currentTarget.parentElement.dataset.key);
  }

  // info for edit
  function onEditTodo(e) {
    const toDoObject = toDoList.find((emp) => emp.id === toDoId);
  }

  // ------html template-------
  let headerTemplate = `<header class="page-not-found center-in-page">
  <h1>The To Do List</h1>
  <p>Keeping it organized</p>
  </header>`;
  const pageHeader = makeElement(headerTemplate);
  // const homeLink = link("todo list", "/home");

  // pageHeader.append(homeLink);
  page.append(pageHeader);
  pageHeader.prepend(makeElement(logo()));

  const removeButton = button("Remove Item");
  page.append(directory());
  page.append(removeButton);

  // -----remove button functionality-----
  removeButton.addEventListener("click", function (e) {
    const action = { type: "edit" };
    const payload = { id: 1 };
    const temp = reducers({ action, payload });
    console.log(temp);
  });

  // ------Data------
  const toDoList = getStore();
  // -------CARD------
  const container = toDoCardList();
  console.log(container);

  // assume data is never null
  if (toDoList !== null) {
    const ul = container.querySelector("ul");
    const elements = toDoList.map((emp) => toDoItem(emp));
    elements.forEach((element) => {
      element.querySelector("#delete").addEventListener("click", onDeleteTodo);
      ul.append(element);
    });

    page.append(container);

    console.log(elements);
  }

  // const listContainer = employee();
  // console.log(listContainer);

  return page;
};

export default toDoPage;
