const initialState = {
  song: [],
  artist: "muse",
  rock: ["muse", "tony tammaro", "queen", "system of a down"],
  pop: ["coldplay", "harry styles", "oasis", "abba"],
  hiphop: ["rihanna", "alicia keys", "bruno mars", "sia"],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SONG":
      return {
        ...state,
        song: [...state.song, action.payload],
      };
    case "GET_NAME_ARTIST":
      return { artist: action.paylod };
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
