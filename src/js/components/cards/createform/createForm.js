import makeElement from "../../../utils/makeElement";
import * as styles from "./styles.module.scss";
import keyGenerator, { createId } from "../../../utils/Key";
import logo from "../../icons/logo";

// createStore(todo);
// const newToDo = [...keyGenerator(newToDo)];
// console.log(newToDo);

const createBody = function () {
  const template = `
    <section id="todolist" class="${styles.todo_card}">
    <header class="todolist-header">
    ${logo()}
        <h2>Create a new List item</h2>
    </header>
    <section id="todocreate" class="${styles.todo_create}">
    <header class="">
    </header>
    </section>
</section>
    `;

  return makeElement(template);
};

export default createBody;
