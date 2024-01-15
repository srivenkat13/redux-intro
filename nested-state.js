const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  name: "Venkat",
  address: {
    street: "123 Park Avenue",
    city: "GTA",
    state: "Solid",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };

    default: {
        return state
    }
  }
};


const store = redux.createStore(reducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => { 
    console.log('Upadted State',store.getState())
 } )


store.dispatch(updateStreet('456 Peter Avenue'))

unsubscribe()