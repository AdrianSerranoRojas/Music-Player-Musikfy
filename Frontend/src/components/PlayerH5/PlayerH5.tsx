// export default PlayerH5;
import React, { useRef, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";
import { setTrackIndex } from "../../features/song/songsSlice";
import "react-h5-audio-player/lib/styles.css";

const PlayerH5 = ({ layoutDisplay, src, title, ...otherProps }) => {
  const currentSong = useSelector((state) => state.songs.currentSong);
  const trackIndex = useSelector((state) => state.songs.trackIndex);
  const player = useRef(trackIndex);
  const dispatch = useDispatch();
  // const [trackIndex, setTrackIndex] = useState(0);
  console.log(trackIndex);

  const handleClickPrevious = () => {
    dispatch(setTrackIndex(trackIndex === 0 ? currentSong.length - 1 : trackIndex - 1));
  };

  const handleClickNext = () => {
    dispatch(setTrackIndex(trackIndex < currentSong.length - 1 ? trackIndex + 1 : 0));
  };

  // make a reduxstate
  return (
    <AudioPlayer
      style={{ borderRadius: "1rem", textAlign: "center" }}
      autoPlay
      src={currentSong[trackIndex].audio}
      onPlay={(e) => console.log("onPlay")}
      onPause={(e) => console.log("onPause")}
      showSkipControls={true}
      showJumpControls={false}
      header={`Now playing: ${currentSong[trackIndex].songName}`}
      footer={`Artist: ${currentSong[trackIndex].songArtist}`}
      ref={player}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
    />
  );
};
export default PlayerH5;
