const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";

//action creator function
function oderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 24,
};

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(`Initial State`, store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// store.dispatch(oderCake());
// store.dispatch(oderCake());
// store.dispatch(oderCake());
// store.dispatch(restockCake(10))

const actions = bindActionCreators({oderCake,restockCake},store.dispatch)
actions.oderCake()
actions.oderCake()
actions.oderCake()
actions.restockCake(10)

unsubscribe();

//cannot dispatch an action after unsubscribing
store.dispatch(oderCake());
