import { Box, Fab } from "@mui/material";
import "./Main.scss"
import TableCell from '@mui/material/TableCell';

function Main() {
    return(
        <div className="entirePage">
        <div className="mainPage">
        <h1 className="centered">Musikfy</h1>
        <Box sx={{ mx: "auto", width: 380 }}>
            <h2 className="h2Main">Your new music plataform</h2>
        </Box>
        <Box sx={{ mx: "auto", mt: 10, width: 450 }}>
            <Fab variant="extended" sx={{mx: 5}} className="signUp">
                SIGN UP NOW
            </Fab>
            <Fab variant="extended" sx={{mx: 5}} className="logIn">
                LOG IN
            </Fab>
        </Box>
        <Box sx={{ mx: "auto", width: 240 }}>
            <a className="aMain" href="#">Continue without loging in</a>
        </Box>
        </div>
        </div>
    )
}
export default Main;