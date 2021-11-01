/*
------Reducer CRUD--------
action: what do you want to do on the store ?
    delete: remove a user
    edit: edits an existing employees
    add: add new
payload is the data for that action object
    {object}
*/

// manipulating the store
import { getStore } from "./store";

// {} is an object parameter
function reducers(action) {
  console.log(action);
  switch (action.type) {
    case "edit":
      return "edit employee";
    case "delete":
      console.log(action.payload.id);
      action.cb();
    case "add":
      return "create a new employee";
    default:
      return store;
  }
}

export default reducers;
