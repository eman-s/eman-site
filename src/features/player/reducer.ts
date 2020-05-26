const initialState = {
  position: [0, 0],
};

const playerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return action.payload;
    default:
      return state;
  }
};

export default playerReducer;
