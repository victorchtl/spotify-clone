import { Box, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const BottomNav:React.FC = () => {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <HomeIcon />
        <Typography variant='caption'>Home</Typography>
      </Box>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <SearchIcon />
        <Typography variant='caption'>Home</Typography>
      </Box>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <LibraryMusicIcon />
        <Typography variant='caption'>Home</Typography>
      </Box>
    </Box>
  )
}

export default BottomNav