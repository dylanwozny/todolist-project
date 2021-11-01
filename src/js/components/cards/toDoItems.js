import makeElement from "../../utils/makeElement";

// "category": "friends",
// "title":"Lunch with Ivan",
// "isComplete": true,
// "startDate": "saturday oct 30th",
// "startTime": "12:00pm",
// "endDate": "saturday oct 30th",
// "endTime": "2:00pm"

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
