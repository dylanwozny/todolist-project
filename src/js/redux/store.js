// STORE is json data manipulated by Js, stored in js instead of DB

let store = null;

// Create the store accessed by all our app components
function createStore(data = []) {
  if (store === null) {
    //   [...] operator puts properties from object into new array
    store = [...data];
  }
  return null;
}

function getStore() {
  return store;
}
export { createStore, getStore };
