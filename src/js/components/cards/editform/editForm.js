import makeElement from "../../../utils/makeElement";
import * as styles from "./styles.module.scss";
import keyGenerator, { createId } from "../../../utils/Key";
import logo from "../../icons/logo";

// createStore(todo);
// const newToDo = [...keyGenerator(newToDo)];
// console.log(newToDo);
//.todo_card
const createBody = function () {
  const template = `
    <section id="todolist" class="${styles.create_header}">
    <header class="todolist-header">
    ${logo()}
        <h2>Edit a list item</h2>
    </header>
    <section id="todocreate" class="">
    <header class="">
    </header>
    </section>
</section>
    `;

  return makeElement(template);
};

export default createBody;
