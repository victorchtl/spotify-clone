import { Box, Divider } from '@mui/material'
import React from 'react'
import SideMenuNav from './SideMenuNav'
import SideMenuPlaylists from './SideMenuPlaylists'
import '../../css/SideMenu.css'

const SideMenu: React.FC = () => {
    
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            height={'100%'}
        >
            <Box m={2}>
                <SideMenuNav />
            </Box>
            <Box>
                <Divider />
            </Box>
            <Box ml={2} mr={1} mt={1} mb={1} sx={{height:'100%', overflow:'auto'}}>
                <SideMenuPlaylists />
            </Box>
        </Box>
    )
}

export default SideMenu