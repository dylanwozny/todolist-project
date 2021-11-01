import { create } from "lodash";
import { createStore, getStore } from "./redux/store";
import { Router } from "./routes/router";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator, { createId } from "./utils/Key";

const app = document.querySelector("#app");
Router(window.location.pathname);

// async in function title
const onAppInit = async function (e) {
  let todo = await dataFetcher("./data/todo.json");
  

  // DEMO make id on todo items that doesn't have unique keys
  if (todo[0].id === undefined) {
    todo = [...keyGenerator(todo)];
  }

  createStore(todo);
  
};

window.addEventListener("load", onAppInit);
