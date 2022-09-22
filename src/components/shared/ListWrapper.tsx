import { Avatar, Box, Divider, Grid, Stack, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import React, { useEffect } from 'react'
import ListSong from './ListSong';
import { useQuery } from '@tanstack/react-query';
import firestoreService from '../../services/firestore.service';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrackList } from '../../slices/audioPlayerSlice';

type songParams = {
    id: string;
};

interface PropTypes {
    tracks: any,
}

const ListWrapper: React.FC<PropTypes> = ({ tracks }) => {

    return (
        <Box>
            <Box>
                <Stack>
                    <PlayCircleIcon color='primary' fontSize='large' />
                </Stack>
            </Box>
            <Grid container>
                <Grid item></Grid>
                <Grid item></Grid>
                <Grid item></Grid>
                <Grid item xs={12} mb={2} mt={2}>
                    <Divider />
                </Grid>
            </Grid>
            {tracks.map((song: any, index: number) => (
                <ListSong name={song.name} artist={song.artist} album={song.album} duration={song.duration} artwork={song.artwork} index={index} key={song.id} />
            ))}
        </Box>
    )
}

export default ListWrapper