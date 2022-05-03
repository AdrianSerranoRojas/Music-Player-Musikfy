import React from 'react';
import {IoPlayOutline, IoPlaySkipForwardOutline, IoPlaySkipBackOutline, IoShuffleOutline} from 'react-icons/io5';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import {IoMdHeartEmpty} from 'react-icons/io';
import {FaRandom} from 'react-icons/fa'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { VolumeDownRounded, VolumeUpRounded } from '@mui/icons-material';
import { styled, Typography, useTheme } from '@mui/material';

import './MusicPlayer.scss';




function MusicPlayer() {
    const theme = useTheme();
    const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    const duration = 200; // song time seconds
    const [position, setPosition] = React.useState(0);
    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
    });
    function formatDuration(value: number) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }

    return(
        <div className='musicPlayer'>
            <div className='fixVert'>
                <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="juice" />
            </div>
            <div className='fixVert'>
                Lucid Dreams<br />
                <span className='author'>Juice WRLD</span>
            </div>
            <div className='leftMusic1'>
            <TinyText>{formatDuration(position)}</TinyText>
            </div>
            <div className='midMusic'>
            <div className='leftMusic2'>
            <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
                },
                '&.Mui-active': {
                width: 20,
                height: 20,
                },
            },
            '& .MuiSlider-rail': {
                opacity: 0.28,
            },
            }}
        />
        </div>
                <IoMdHeartEmpty size="22px" className='iconsMusic likeIcon'/>
                <IoPlaySkipBackOutline size="32px" className='iconsMusic backIcon'/>
                <IoPlayOutline size="48px" className='iconsMusic playIcon'/>
                <IoPlaySkipForwardOutline size="32px" className='iconsMusic forwardIcon'/>
                <IoShuffleOutline size="22px" className='iconsMusic shuffleIcon'/>
            </div>
            <div className='leftMusic3'>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
        </div>
            <div className='rightMusic fixVert'>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded />
            <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                border: 'none',
                },
                '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                },
                },
            }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
        </div>
        </div>
    )
}

export default MusicPlayer;