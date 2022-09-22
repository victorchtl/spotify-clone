import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

type dataProps = {
    data: any
}

const ListTitle: React.FC<dataProps> = ({ data }) => {

    console.log(data)

    return (
        <Box
            display={'flex'}
            sx={{ width: '100%' }}>
            <Box
                sx={{
                    background: 'black',
                    width: '200px',
                    aspectRatio: '1'
                }}
            />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} ml={1}>
                <Typography mb={1} variant='caption'>PLAYLIST PUBLIQUE</Typography>
                <Typography mb={1} variant='h4'>{data.name}</Typography>
                <Typography>{data.tracks.length} elements</Typography>
            </Box>
        </Box>
    )
}

export default ListTitle