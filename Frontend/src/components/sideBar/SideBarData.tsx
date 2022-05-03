import React from "react";

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';



export const SideBarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <PermIdentityOutlinedIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <HomeOutlinedIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Sign-up',
        path: '/sign-up',
        icon: <VpnKeyOutlinedIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Add Song',
        path: '/addSong',
        icon: <PlaylistAddOutlinedIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/',
        icon: <AlternateEmailOutlinedIcon />,
        cName: 'nav-text'
    },
]