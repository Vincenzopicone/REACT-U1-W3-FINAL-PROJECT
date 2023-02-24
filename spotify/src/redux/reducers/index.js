const initialState = {
  song: [],
  section: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SONG":
      return {
        ...state,
        song: [...state.song, action.payload],
      };
    /* case "GET_CARD":
      return {
        ...state,
        section: [...state.section, action.payload],
      }; */
    default:
      return state;
  }
};

export default appReducer;
