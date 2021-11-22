import makeElement from "../../../utils/makeElement";
import * as styles from "./styles.module.scss";
import logo from "../../icons/logo";

const toDoBody = function () {
  const template = `
    <section id="todolist" class="${styles.todo_body}">
    <header class="todolist-header">
    ${logo()}
        <h2>To do list</h2>
    </header>
    <section id="todocreate" class="${styles.todo_create}">
    <header class="">
        <h2>Create New To Do Item</h2>
    </header>
        <div id="todocreate-main">
        <button id="create"  >Create New</button>
        </div>
    <footer>

    </footer>
</section>
        <div id="todolist-items">
        
        </div>
    <footer>

    </footer>
</section>
    `;

  return makeElement(template);
};

export default toDoBody;
