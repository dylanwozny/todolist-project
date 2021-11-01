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
import header from "../components/ui/header";
import tagLine from "../components/ui/tagline";

const toDoPage = function () {
  const page = document.createElement("div");

  // Delete handler function
  function onDeleteTodo(e) {
    // grabbing id
    const toDoId = e.currentTarget.parentElement.dataset.key;
    Router("/delete", toDoId);

    console.log(e.currentTarget.parentElement.dataset.key);
  }

  const pageHeader = document.createElement("header");
  pageHeader.classList.add("page-header"); // add class to page header
  pageHeader.appendChild(makeElement(logo()));
  pageHeader.append(makeElement(tagLine("Get it all Done !", "tagline")));

  page.append(pageHeader);

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
