import withLayout from "../../hoc/withLayout";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSongsQuery } from "../../services/songApi";
import { addSong, songsSelector, fetchSongs } from "../../features/song/songsSlice";

const PlaySong = () => {
  const [songList, setSongList ] = useState([]);
  
  const dispatch = useDispatch();
  dispatch(fetchSongs());
  // const [getSongs] = useGetSongsQuery();
  // console.log(getSongs());
  // useGetSongsQuery().unwrap().then((fulfilled) => {
  //   dispatch(addSong("carapolla"))
  // })

  // const carapolla = useSelector(songsSelector);
  // console.log(carapolla);
  
  // const datos = useSelector(songsSelector);

  // console.log(data.data);

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

        // {arraySong.map((song) =>
        //   (<songItem/>))}
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
      );

}

export default withLayout(PlaySong);