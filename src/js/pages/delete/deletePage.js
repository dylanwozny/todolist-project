import makeElement from "~/src/js/utils/makeElement";
import button from "~/src/js/components/ui/button";
import styles from "./styles.module.scss";
import { Router } from "../../routes/router";
import reducers from "../../redux/reducer";

const deletePage = function (props) {
  console.log(props);
  // Create A Container for the page
  // Styles either with modules.scss or styles.module.css
  const page = document.createElement("div");
  const cancelButton = button("cancel");
  const deleteButton = button("delete", "buttonWarning");

  // event handler for delete
  function onDelete(e) {
    // action object
    console.log(props);
    const action = {
      type: "delete",
      payload: { id: props },
      cb: () => {
        Router("/todo");
      },
    };
    reducers(action);
  }

  deleteButton.addEventListener("click", onDelete);
  let headerTemplate = `
        <header class=" ${styles.deletePage} welcome center-in-page">
            <h1>Delete To Do Item ?</h1>
            <div></div>
        </header>
    `;
  const pageHeader = makeElement(headerTemplate);
  pageHeader.querySelector("div").append(cancelButton, deleteButton);
  page.append(pageHeader);

  return page;
};

export default deletePage;
