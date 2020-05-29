const initialState = {
  position: [0, 0],
};

const playerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...state,
        position: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
