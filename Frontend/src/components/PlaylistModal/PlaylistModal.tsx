import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import DehazeIcon from '@mui/icons-material/Dehaze';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function PlaylistModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const Widget = styled("div")(({ theme }) => ({
    padding: 24,
    borderRadius: 16,
    width: "20%",
    maxWidth: "100%",
    height: "20vh",
    marginTop: "20%",
    marginLeft: "45.5%",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
  }));

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 21 }}>
        <DehazeIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Widget>
          <Button>
            <AddCircleIcon/>
            <Typography sx={{color: 'text.primary'}}>
              Follow the playlist
            </Typography>
          </Button>
          <Button>
            <DeleteIcon/>
            <Typography sx={{color: 'text.primary'}}>
              Delete the playlist
            </Typography>
          </Button>
        </Widget>
      </Modal>
    </>
  );
}

export default PlaylistModal;