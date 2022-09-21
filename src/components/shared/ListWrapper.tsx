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

const ListWrapper: React.FC = () => {

    const dispatch = useDispatch();

    const { id } = useParams<songParams>()

    const { isLoading, data } = useQuery(['tracklist', id], () => firestoreService.getPlaylist(id!), {
        // The query will not execute until the userId exists
        enabled: id !== undefined,
    })

    const trackListId = data?.tracks

    const { data: projects } = useQuery(['projects', trackListId], () => firestoreService.getTracksById(trackListId),
        {
            // The query will not execute until the userId exists
            enabled: !!trackListId,
        }
    )

    const songsUrl = projects?.map(a => a.url);

    useEffect(() => {
        dispatch(setTrackList(songsUrl))
    }, [dispatch, trackListId, songsUrl])


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
            {projects && projects.map((song: any, index: number) => (
                <ListSong name={song.name} artist={song.artist} album={song.album} duration={song.duration} index={index} key={song.id} />
            ))}
        </Box>
    )
}

export default ListWrapper