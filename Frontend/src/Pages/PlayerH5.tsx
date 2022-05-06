// import React, { useEffect, useState } from 'react';
// import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
// import { useDispatch, useSelector } from 'react-redux';

// const PlayerH5 = () => {
//   // let audio = useRef("audio-tag")
//   return (
//     <>
//     <div className="w-full">
//         <AudioPlayer
//           src="https://res.cloudinary.com/carapolla/video/upload/v1651577947/songs/aplauso_sape4x.mp3"
//           showSkipControls
//           autoPlay
//           showJumpControls={false}
          // onClickNext={handleNext}
          // onClickPrevious={handlePrevious}
          // onEnded={handleNext}
//           layout="stacked-reverse"
//           style={{ backgroundColor: 'black', color: 'white' }}
//           customControlsSection={[
//             RHAP_UI.ADDITIONAL_CONTROLS,
//             RHAP_UI.LOOP,
//             RHAP_UI.MAIN_CONTROLS,
//             <button
//               type="button"
//               key="shuffle"
//               className="bx bx-shuffle text-3xl pl-2"
//               // onClick={handleShuffle}
//             />,

//             RHAP_UI.VOLUME_CONTROLS,
//           ]}
//           customAdditionalControls={[]}
//           customVolumeControls={[
//             <button
//               type="button"
//               key="x"
//               className="bx bx-list-ul text-3xl pr-2"
//               // onClick={handleModalPlayList}
//             />,
//             RHAP_UI.VOLUME,
//           ]}
//         />
//       </div>
//     </>
//   );
// };

// export default PlayerH5;
import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import "react-h5-audio-player/lib/styles.css";

  const PlayerH5 = ({ layoutDisplay, src, title, ...otherProps }) => {
  const currentSong = useSelector((state) => state.songs.currentSong);
  const player = useRef();
  console.log("player",player);
  
  
  useEffect(() => {
    if (currentSong) {
      player.current.audio.current.pause();
    } else {
      player.current.audio.current.play();
    }
  }, [currentSong]);

  
  // make a reduxstate
  return (
    <AudioPlayer
  //     src={currentSong.audio}
  //     header={title}
  // //  togglePlay={(e) => console.log(e)}
  //     onPlay={(e) => console.log(e)}
  //     onPause={(e) => console.log(e)}
  //     onEnded={() => console.log("onEnded")}
  //     onError={() => console.log("onError")}
  //     style={{ backgroundColor: "#000" }}
  //     layout={layoutDisplay}
  //     ref={player}
        style={{ borderRadius: "1rem", textAlign: "center" }}
        autoPlay
        // layout="horizontal"
        src={currentSong.audio}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: Rap malo`}
        footer="All music from: www.bensound.com"
        ref={player}
        // onClickPrevious={handleClickPrevious}
        // onClickNext={handleClickNext}
        // onEnded={handleClickNext}
    />
  );
};
export default PlayerH5