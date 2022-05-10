import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";

function FavIcon() {

    const [fav, setFav] = useState(false)

    function handleFav(){
        if(fav){
            setFav(false)
        }else{
            setFav(true)
        }
    }

  return (
    <IconButton
        onClick={handleFav}
        aria-label="save as favorite">
        {fav ? <FavoriteIcon sx={{ height: 30, width: 30 }}/> : <FavoriteBorderIcon sx={{ height: 30, width: 30 }}/>}
    </IconButton>
  );
}

export default FavIcon;
