import makeElement from "../../utils/makeElement";
import toDoBody from "../../components/cards/todopage/";
import toDoItem from "../../components/cards/todoitems";
import { getStore } from "../../redux/store";
import { Router } from "../../routes/router";

let createPage = true;

const toDoList = function () {
  const page = document.createElement("div");
  const toDoContainer = toDoBody();

  function cleanUp() {
    const list = toDoContainer.querySelectorAll("aside");
    list.forEach((list) => {
      list.removeEventListener("click", onDeleteTodo);
    });
  }

  // Delete handler function
  function onDeleteTodo(e) {
    // grabbing id
    const toDoId = e.currentTarget.parentElement.dataset.key;
    const listItem = getStore().filter((listItem) => listItem.id === toDoId);
    cleanUp();
    Router("/delete", listItem[0]);

    console.log(e.currentTarget.parentElement.dataset.key);
  }

  function render() {
    const todolistings = getStore();
    const div = toDoContainer.querySelector("#todolist-items");
    // create li from the store data
    const listElements = getStore().map((td) => toDoItem(td));
    listElements.forEach((element) => {
      element.querySelector("#delete").addEventListener("click", onDeleteTodo);
      div.append(element);
    });
    page.append(toDoContainer);
  }

  render();
  return page;
};

export default toDoList;
