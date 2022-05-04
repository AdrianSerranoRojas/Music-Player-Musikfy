import withLayout from "../../hoc/withLayout";
import { useState, useEffect } from "react";
import axios from "axios";

const PlaySong = () => {
  const [songList, setSongList ] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:4000/songs").then((response)=> setSongList(response.data.data))
    console.log(songList);
  }, [])
  

    const [currentSong, setCurrentSong] = useState({
        audio: new Audio("https://res.cloudinary.com/carapolla/video/upload/v1651577947/songs/aplauso_sape4x.mp3"),
        isPlaying: false,
    })
    // useEffect(()=>{
    //   getSongs().then((response) => {
    //     return(response)
    //   }).then((songList) => setSongList(songList))
    // })
    const playPause = () => {

        // Get state of song
        let isPlaying = currentSong.isPlaying;
    
        if (isPlaying) {
          // Pause the song if it is playing
          currentSong.audio.pause();
        } else {
    
          // Play the song if it is paused
          currentSong.audio.play();
        }
    
        // Change the state of song
        setCurrentSong(currentSong => ({...currentSong, isPlaying: !isPlaying}));
      };

      return (
        <>
        {songList && songList.map((song) =>{
          return(<h1>{song.songName}</h1>)
        })}
        <div>
          {/* Show state of song on website */}
          <p>
            {currentSong.isPlaying ? 
              "Song is Playing" : 
              "Song is Paused"}
          </p>
  
          {/* Button to call our main function */}
          <button onClick={playPause}>
            Play | Pause
          </button>
        </div>
        </>
      );

}

export default withLayout(PlaySong);