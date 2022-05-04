import withLayout from "../../hoc/withLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentSong, songsSelector } from "../../features/song/songsSlice";
import { useGetSongsQuery } from "../../services/songApi";
import { Button } from "@mui/material";
import { GrFavorite } from "react-icons/gr";

const PlaySong = () => {
  const dispatch = useDispatch();
  const [songList, setSongList] = useState([]);

  const [currentSong, setCurrentSong] = useState();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/songs")
  //     .then((response) => setSongList(response.data.data));
  //   console.log(songList);
  // }, []);

  const { data, isLoading, isSuccess } = useGetSongsQuery();
  console.log(data);

  // // if (isSuccess) {
  // //   setCurrentSong(data.data[0]);
  // // }

  // const [ getSongs ]

  // const { currentSong } = useSelector(songsSelector);

  // const [currentSong, setCurrentSong] = useState({
  //     audio: new Audio("https://res.cloudinary.com/carapolla/video/upload/v1651577947/songs/aplauso_sape4x.mp3"),
  //     isPlaying: false,
  // })
  // useEffect(()=>{
  //   getSongs().then((response) => {
  //     return(response)
  //   }).then((songList) => setSongList(songList))
  // })
  const playPause = () => {
    // // Get state of song
    // let isPlaying = currentSong.isPlaying;

    // if (isPlaying) {
    //   // Pause the song if it is playing
    //   currentSong.audio.pause();
    // } else {

    //   // Play the song if it is paused
    //   currentSong.audio.play();
    // }

    // Change the state of song
    console.log("carapolla");
    dispatch(addCurrentSong(!currentSong.isPlaying));
    // setCurrentSong(currentSong => ({...currentSong, isPlaying: !isPlaying}));
  };
  const handleSelect = (song) => {
    console.log(song);
    setCurrentSong(song);
    console.log("esto es pa setear el currentsong carapolla", currentSong);
  };

  return (
    <>
      {isSuccess &&
        data.data.map((song, index) => {
          return (
            <button
              key={index}
              name={song.songName}
              onClick={(e) => handleSelect(e.target.name)}
            >
              {song.songName}
              <Button variant="outlined" color="primary">
                <GrFavorite />
              </Button>
            </button>
          );
        })}
      <div>
        {/* Show state of song on website */}
        {/* <p>
            {currentSong.isPlaying ? 
              "Song is Playing" : 
              "Song is Paused"}
          </p> */}

        {/* Button to call our main function */}
        <button onClick={playPause}>Play | Pause</button>
      </div>
    </>
  );
};

export default withLayout(PlaySong);
