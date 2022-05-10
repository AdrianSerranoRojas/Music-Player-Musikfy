// export default PlayerH5;
import React, { useRef, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import "react-h5-audio-player/lib/styles.css";

  const PlayerH5 = ({ layoutDisplay, src, title, ...otherProps }) => {
  const currentSong = useSelector((state) => state.songs.currentSong);
  const player = useRef();
  const [trackIndex, setTrackIndex] = useState(0);
  console.log(currentSong);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? currentSong.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < currentSong.length - 1 ? currentTrack + 1 : 0
    );
  };

  // make a reduxstate
  return (
    <AudioPlayer
        style={{ borderRadius: "1rem", textAlign: "center" }}
        autoPlay
        src={currentSong[trackIndex].audio}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: añadir nombre a la lista`}
        footer="musikfy"
        ref={player}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
    />
  );
};
export default PlayerH5