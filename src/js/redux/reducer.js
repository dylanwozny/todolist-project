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
import { getStore, updateStore, createStore } from "./store";

// {} is an object parameter
function reducers(action) {
  console.log(action);
  switch (action.type) {
    case "edit":
      return "edit employee";
    case "delete":
      // grabing the current store
      const store = getStore();
      const index = action.payload.index;
      const newStore = [...store.slice(0, index), ...store.slice(index + 1)];
      updateStore(newStore);
      action.cb();
      return "remove employee";
    case "add":
      return "create a new employee";
    default:
      return store;
  }
}

export default reducers;
