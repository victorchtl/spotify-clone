import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch } from 'react-redux';
import { setTrack } from '../../slices/audioPlayerSlice';

interface PropTypes {
    name: string,
    artist: string,
    album: string,
    duration: number,
    artwork: string,
    index: number
}

const ListSong: React.FC<PropTypes> = ({ name, artist, album, duration, artwork, index }) => {

    const dispatch = useDispatch();

    const [isHover, setIsOver] = useState(false)

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
            onMouseEnter={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
            sx={{
                userSelect: 'none',
                '&:hover': {
                    background: '#2a2a2a',
                    borderRadius: '5px'
                }
            }}>
            <Grid item display={'flex'} alignItems={'center'} justifyContent={'center'} mr={1} sx={{ minWidth: '40px' }}>
                <Box display={isHover ? 'none' : 'flex'} alignItems={'center'}><Typography variant='body2'>{index + 1}</Typography></Box>
                <Box display={isHover ? 'flex' : 'none'} alignItems={'center'} onClick={handleSong}><PlayArrowRoundedIcon /></Box>
            </Grid>
            <Grid item xs>
                <Box display={'flex'} alignItems={'center'}>
                    <Box component={'img'} src={artwork} sx={{ height: '40px', aspectRatio: '1' }} mr={2} />
                    <Stack>
                        <Box sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                            <Typography variant='body2'>{name}</Typography>
                        </Box>
                        <Box sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                            <Typography variant='body2'>{artist}</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs display={'flex'} alignItems={'center'}>
                <Box sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                    <Typography variant='body2'>{album}</Typography>
                </Box>
            </Grid>
            <Grid item display={'flex'} alignItems={'center'} mr={2}>
                <Box display={isHover ? 'flex' : 'none'} alignItems={'center'} justifyContent={'center'} width={'30px'} color={'primary'}><FavoriteRoundedIcon fontSize='small' /></Box>
                <Box display={isHover ? 'none' : 'flex'} alignItems={'center'} justifyContent={'center'} width={'30px'}></Box>
            </Grid>
            <Grid item display={'flex'} alignItems={'center'} >
                <Typography variant='body2'>{timeConverter(duration)}</Typography>
            </Grid>
        </Grid>
    )
}

export default ListSong