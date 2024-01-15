const CAKE_ORDERED = "CAKE_ORDERED";

function oderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
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
          numOfCakes: state.numOfCakes - 1,
        };
  
      default:
        return state;
    }
  };
  