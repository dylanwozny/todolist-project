import makeElement from "../../utils/makeElement";

const toDoItem = function ({
  id,
  category,
  title,
  isComplete,
  startDate,
  startTime,
  endDate,
  endTime,
}) {
  const template = `       
          <aside class="" data-key="${id}">
          <div class="category">${category}</div>
          <header>
            <div class="title">
             <h2>${title}</h2>
            </div>

             
          <h3>${isComplete}</h3>
          </header>
          <ul>
             
              <li><span>Start Day</span><p>${startDate}</p></li>
              <li><span>End Date</span><p>${endDate}</p></li>
              <li><span>Start Time</span><p>${startTime}</p></li>
              <li><span>End Time</span><p>${endTime}</p></li>
          </ul>

          <footer data-key="${id}">
            <button id="delete" data-key="${id}" >delete</button>
            <span></span>
            <button id="edit" data-key="${id}">edit</button>
          </footer>
        </aside>  
  `;
  return makeElement(template);
};

export default toDoItem;
