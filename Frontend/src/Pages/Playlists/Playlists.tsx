import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LikesCard from "../../components/MainCards/LikesCard/LikesCard";
import PlaylistsCardSmall from "../../components/MainCards/PlaylistsCardSmall/PlaylistsCardSmall";
import SongCard from "../../components/SongCard/SongCard";
import { useGetSongsQuery } from "../../services/songApi";
import PlayerH5 from "../PlayerH5";

import "../MySongs/MySongs.scss"
import withLayout from "../../hoc/withLayout";
import SettingsIcon from '@mui/icons-material/Settings';

function Playlists() {
    const WallPaper = styled("div")({
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        overflow: "hidden",
        background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
        transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
        "&:before": {
            content: '""',
            width: "140%",
            height: "140%",
            position: "fixed",
            top: "-40%",
            right: "-50%",
            background:
            "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
        },
        "&:after": {
        content: '""',
        width: "140%",
        height: "140%",
        position: "fixed",
        bottom: "-50%",
        left: "-30%",
        background:
            "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
        transform: "rotate(30deg)",
        },
    });

    const Widget = styled("div")(({ theme }) => ({
        padding: 16,
        borderRadius: 16,
        width: 950,
        maxWidth: "100%",
        margin: "auto",
        marginBottom: 25,
        position: "relative",
        zIndex: 1,
        backgroundColor:
            theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
        backdropFilter: "blur(40px)",
    }));

return (
    <>
    <Box>
        <Widget sx={{
            boxShadow: 4,
            p: 2,
            maxwidth: 750,
            maxheight: 440}}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <img src="https://res.cloudinary.com/carapolla/image/upload/v1652111449/samples/imagen_2022-05-09_175006652_famqza.png" alt="hola" />
            <Box sx={{mt:12}}>
                <Typography variant="h2" fontFamily='Vollkorn, serif'>All Playlists</Typography>
                <SettingsIcon sx={{ml: 18}}/>
            </Box>
        </Box>
                <Box sx={{mt:1}}>
                    <PlaylistsCardSmall/>
                </Box>
        </Widget>
    </Box>
    <WallPaper />
    <Widget sx={{
            boxShadow: 4,
            p: 2}}
            className='bottomSticky'>
        <PlayerH5/>
    </Widget>
    </>

);
};

export default withLayout(Playlists);