import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Sign-up',
        path: '/sign-up',
        icon: <AiIcons.AiFillHeart />,
        cName: 'nav-text'
    },
    {
        title: 'Add Song',
        path: '/addSong',
        icon: <AiIcons.AiFillAudio />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]