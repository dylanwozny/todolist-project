import makeElement from "~/src/js/utils/makeElement";
import button from "~/src/js/components/ui/button";
import styles from "./styles.module.scss";
import { Router } from "../../routes/router";
import reducers from "../../redux/reducer";
import { getStore } from "../../redux/store";

const cancelButton = button("cancel");
const deleteButton = button("delete", "buttonWarning");

const deletePage = function (props) {
  console.log(props);
  // Create A Container for the page
  // Styles either with modules.scss or styles.module.css
  const page = document.createElement("div");

  // Remove The Listeners from the Page
  function cleanUp() {
    cancelButton.removeEventListener("click", onCancelDelete);
    deleteButton.removeEventListener("click", onDelete);
  }

  //Cancel Delete Event Handler
  // Call the cleanUp method
  function onCancelDelete(e) {
    cleanUp();
    Router("/todo");
  }

  // event handler for delete
  function onDelete(e) {
    // action object
    if (props !== null) {
      console.log(props);
      Router("/todo");
      const removeToDo = props;
      const index = getStore().findIndex((toDo) => toDo.id === removeToDo.id);

      const action = {
        type: "delete",
        payload: { index },
        cb: () => {
          Router("/todo");
        },
      };
      reducers(action);
      cleanUp();
    }
  }

  deleteButton.addEventListener("click", onDelete);
  let headerTemplate = `
        <header class=" ${styles.deletePage} welcome center-in-page">
            <h1>Delete To Do Item ?</h1>
            <div></div>
        </header>
    `;
  const pageHeader = makeElement(headerTemplate);
  pageHeader.querySelector("div").innerHTML = "";
  cancelButton.addEventListener("click", onCancelDelete);
  deleteButton.addEventListener("click", onDelete);
  pageHeader.querySelector("div").append(cancelButton, deleteButton);
  page.append(pageHeader);

  return page;
};

export default deletePage;
