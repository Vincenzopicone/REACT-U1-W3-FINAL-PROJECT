const initialState = {
  song: [],
  artist: "muse",
  play: {},
  rock: ["muse", "maneskin", "queen", "system of a down"],
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
    case "PLAY_SONG":
      return {
        ...state,
        play: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
