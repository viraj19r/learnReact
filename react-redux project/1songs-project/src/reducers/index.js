import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "5:05",
    },
    {
      title: "On My Way",
      duration: "4:50",
    },
    {
      title: "On Star",
      duration: "3:09",
    },
    {
      title: "I want it that way",
      duration: "1;45",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
