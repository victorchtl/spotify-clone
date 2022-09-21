import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch } from 'react-redux';
import { setTrack } from '../../slices/audioPlayerSlice';

interface PropTypes {
    name: string,
    artist : string,
    album: string,
    duration: number,
    index: number
}

const ListSong: React.FC<PropTypes> = ({name, artist, album, duration, index}) => {

    const dispatch = useDispatch();

    const [playOrIndex, setPlayOrIndex] = useState(false)

    function timeConverter(seconds: number): string {
        const time: number = Math.floor(seconds);
        const min: number = Math.floor(time / 60);
        const sec: number = time - (min * 60);
        let minDisplay: string;
        let secDisplay: string;
        min < 10 ? minDisplay = `0${min}` : minDisplay = `${min}`
        sec < 10 ? secDisplay = `0${sec}` : secDisplay = `${sec}`
        return minDisplay + ':' + secDisplay
      }

      const handleSong = () => {
        dispatch(setTrack(index))
      }

    return (
        <Grid container p={1}
            onMouseEnter={() => setPlayOrIndex(true)}
            onMouseLeave={() => setPlayOrIndex(false)}
            sx={{
                userSelect: 'none',
                '&:hover': {
                    background: '#2a2a2a',
                    borderRadius: '5px'
                }
            }}>
            <Grid item display={'flex'} alignItems={'center'} justifyContent={'center'} mr={1} sx={{minWidth:'40px'}}>
                <Box display={playOrIndex ? 'none' : 'flex'} alignItems={'center'}><Typography>{index+1}</Typography></Box>
                <Box display={playOrIndex ? 'flex' : 'none'} alignItems={'center'} onClick={handleSong}><PlayArrowRoundedIcon /></Box>
            </Grid>
            <Grid item xs>
                <Box display={'flex'} alignItems={'center'}>
                    <Box sx={{ background: 'purple', height: '40px', aspectRatio: '1' }} mr={1} />
                    <Stack>
                        <Typography>{name}</Typography>
                        <Typography>{artist}</Typography>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs display={'flex'} alignItems={'center'} >
                <Typography>{album}</Typography>
            </Grid>
            <Grid item display={'flex'} alignItems={'center'} mr={2}>
                <Box display={playOrIndex ? 'flex' : 'none'} alignItems={'center'} justifyContent={'center'} width={'30px'} color={'primary'}><FavoriteRoundedIcon /></Box>
                <Box display={playOrIndex ? 'none' : 'flex'} alignItems={'center'} justifyContent={'center'} width={'30px'}></Box>
            </Grid>
            <Grid item display={'flex'} alignItems={'center'} >
                <Typography>{timeConverter(duration)}</Typography>
            </Grid>
        </Grid>
    )
}

export default ListSong