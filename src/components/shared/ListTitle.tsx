import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ListTitle: React.FC = () => {
    return (
        <Box 
        display={'flex'}
        sx={{width:'100%'}}>
            <Box 
            sx={{
                background:'black',
                width:'200px',
                aspectRatio:'1'
            }}
            />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} ml={1}>
                <Typography mb={1} variant='caption'>PLAYLIST PUBLIQUE</Typography>
                <Typography mb={1} variant='h1'>TITRE</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Avatar />
                    <Typography>User</Typography>
                    <Typography>14 songs</Typography>
                    <Typography>53min</Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default ListTitle