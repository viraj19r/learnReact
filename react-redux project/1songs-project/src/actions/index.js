// action creator
// named export
export const selectSong = (song) => {
  //returns action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

