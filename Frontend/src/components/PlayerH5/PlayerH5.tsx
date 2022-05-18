import { useRef } from "react";

import AudioPlayer from "react-h5-audio-player";

import { useDispatch, useSelector } from "react-redux";

import { setTrackIndex } from "../../features/song/songsSlice";

import "react-h5-audio-player/lib/styles.css";

import "./PlaherH5.scss";

const PlayerH5 = ({ layoutDisplay, src, title, ...otherProps }) => {
  const currentSong = useSelector((state) => state.songs.currentSong);
  const trackIndex = useSelector((state) => state.songs.trackIndex);
  const player = useRef(trackIndex);
  const dispatch = useDispatch();
  // const [trackIndex, setTrackIndex] = useState(0);

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
      header={`Now playing: ${currentSong[trackIndex].songName} (${currentSong[trackIndex].songArtist})`}
      ref={player}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
    />
  );
};
export default PlayerH5;
