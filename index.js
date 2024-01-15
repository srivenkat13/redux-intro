const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

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
function oderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}
function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 24,
  numOfIcecreams: 30,
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
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
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

const actions = bindActionCreators(
  { oderCake, restockCake, oderIcecream, restockIceCream },
  store.dispatch
);
actions.oderCake();
actions.oderCake();
actions.oderCake();
actions.restockCake(10);
actions.oderIcecream();
actions.oderIcecream();
actions.restockIceCream(5)

unsubscribe();

//cannot dispatch an action after unsubscribing
store.dispatch(oderCake());
