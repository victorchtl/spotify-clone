import { Box } from '@mui/material'
import React from 'react'
import ListTitle from '../components/shared/ListTitle'
import ListWrapper from '../components/shared/ListWrapper'

const Playlist:React.FC = () => {
  return (
    <Box sx={{width:'100%'}}>
        <ListTitle />
        <ListWrapper />
    </Box>
  )
}

export default Playlist