import { Box, Grid, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/SideMenuPlaylists.css'
import firestoreService from '../../services/firestore.service'

const SideMenuPlaylists: React.FC = () => {

    const fakePlaylists: Number[] = Array.from(Array(50).keys())

    let activeStyle = {
        color: '#ffff',
        textDecoration: 'none',
    }

    let unactiveStyle = {
        color: '#dddd',
        textDecoration: 'none',
    }

    const {isLoading, data} = useQuery(['todos'], () => firestoreService.getPlaylists())

    return (
        <Box height={'100%'}>
            {data && data.map(playlist => (
                <Grid container wrap="nowrap" key={playlist.toString()}>
                    <Grid item xs className='link'>
                        <NavLink to={`playlist/${playlist.id}`} style={({ isActive }) =>
                            isActive ? activeStyle : unactiveStyle
                        }>
                            <Typography noWrap mt={1}>{playlist.name}</Typography>
                        </NavLink>
                    </Grid>
                </Grid>
            ))}
        </Box>
    )
}

export default SideMenuPlaylists