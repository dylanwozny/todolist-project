import makeElement from "../../utils/makeElement";
const toDoCardList = function () {
  const template = `
    <aside id="todolist" class="todolist-container">

    <ul id="todoitems" class="todoitems">
     
    </ul>
    <footer>

    </footer>
</aside>
    `;

  return makeElement(template);
};

export default toDoCardList;
