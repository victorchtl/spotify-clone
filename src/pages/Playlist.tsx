import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ListTitle from '../components/shared/ListTitle'
import ListWrapper from '../components/shared/ListWrapper'
import firestoreService from '../services/firestore.service'
import { setTrackList } from '../slices/audioPlayerSlice'

type songParams = {
  id: string;
};

const Playlist: React.FC = () => {

  const dispatch = useDispatch();

  const { id } = useParams<songParams>()

  const { isLoading, data } = useQuery(['tracklist', id], () => firestoreService.getPlaylist(id!), {
    // The query will not execute until the userId exists
    enabled: id !== undefined,
  })

  const trackListId = data?.tracks

  const { data: tracks } = useQuery(['tracks', trackListId], () => firestoreService.getTracksById(trackListId),
    {
      // The query will not execute until the userId exists
      enabled: !!trackListId,
    }
  )

  const songsUrl = tracks?.map(a => a.url);

  useEffect(() => {
    dispatch(setTrackList(songsUrl))
  }, [dispatch, trackListId, songsUrl])

  return (
    <Box sx={{ width: '100%' }}>
      {tracks &&
        <>
          <ListTitle data={data}/>
          <ListWrapper tracks={tracks} />
        </>
      }
    </Box>
  )
}

export default Playlist