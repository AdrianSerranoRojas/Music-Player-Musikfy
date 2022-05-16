import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LikesCard from "../../components/MainCards/LikesCard/LikesCard";
import PlaylistsCard from "../../components/MainCards/PlaylistsCard/PlaylistsCard";
import SongCard from "../../components/SongCard/SongCard";
import { useGetSongsQuery } from "../../services/songApi";

import "../MySongs/MySongs.scss";
import withLayout from "../../hoc/withLayout";
import PlaylistModal from "../../components/PlaylistModal/PlaylistModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

function SinglePlaylist() {

  const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 830,
    maxWidth: "100%",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
  }));

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed)

    return result;
  }

  const { data, isLoading, isSuccess } = useGetSongsQuery();

  const [songs, setSongs] = useState();

  return (
    <>
    <DragDropContext
      // onDragEnd={(result) => {
      //   const {source, destination} = result;
      //   if (!destination) {
      //     return;
      //   }
      //   if (
      //     source.index === destination.index &&
      //     source.droppableId === destination.droppableId
      //     ) {
      //       return;
      //     }

      //   setSongs((prevSongs) =>
      //     reorder(prevSongs, source.index, destination.index));
      // }}
    >
      <Box>
        <Widget
          sx={{
            boxShadow: 4,
            p: 2,
            maxwidth: 750,
            maxheight: 440,
          }}
        >
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            <img
              src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg"
              alt="hola"
            />
            <Box sx={{ mt: 15 }}>
              <Typography
                variant="h2"
                align="center"
                fontFamily="Vollkorn, serif"
              >
                Name Playlist
              </Typography>
              <Typography
                variant="h4"
                align="center"
                fontFamily="Vollkorn, serif"
              >
                31 Songs
              </Typography>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Vollkorn, serif"
              >
                Created by alonso22
              </Typography>
              <PlaylistModal/>
            </Box>
          </Box>
          <Droppable droppableId="songs">
          {(droppableProvided) => (
          <Box
            sx={{ mt: 1 }}
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            >
            {isSuccess &&
              data.data.map((song, index) => {
                return (
                  <Draggable key={index} draggableId={song._id} index={index}>
                  {(draggableProvided) =>
                    <Box
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}>
                      <SongCard
                        songName={song.songName}
                        songUrl={song.songUrl}
                        songUser={song.songUser.email}
                      />
                    </Box>
                  }
                  </Draggable>
                );
              })}
              {droppableProvided.placeholder}
          </Box>)}
          </Droppable>
        </Widget>
      </Box>
      </DragDropContext>
    </>
  );
}

export default withLayout(SinglePlaylist);
