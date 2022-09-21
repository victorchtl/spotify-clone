import { Box, Typography } from '@mui/material'
import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';

const SideMenuNav: React.FC = () => {

    let activeStyle = {
        color: '#ffff',
        textDecoration: 'none',
    }

    let unactiveStyle = {
        color: '#dddd',
        textDecoration: 'none',
        '&:hover': {
            color: '#ffff',
        }
    }

    return (
        <>
            <Box>
                <nav>
                    <NavLink to={'/'}
                        end
                        style={({ isActive }) =>
                            isActive ? activeStyle : unactiveStyle
                        }>
                        <Box display={'flex'} alignItems={'center'} mb={2}>
                            <HomeIcon fontSize='medium' />
                            <Typography ml={1}>Home</Typography>
                        </Box>
                    </NavLink>
                    <NavLink to={'search'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : unactiveStyle
                        }>
                        <Box display={'flex'} alignItems={'center'} mb={2}>
                            <SearchIcon fontSize='medium' />
                            <Typography ml={1}>Search</Typography>
                        </Box>
                    </NavLink>
                    <NavLink to={'library'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : unactiveStyle
                        }>
                        <Box display={'flex'} alignItems={'center'} mb={5}>
                            <LibraryMusicIcon fontSize='medium' />
                            <Typography ml={1}>Library</Typography>
                        </Box>
                    </NavLink>
                </nav>
            </Box>
            <Box mt={3}>
                <nav>
                    <NavLink to={'playlists'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : unactiveStyle
                        }>
                        <Box display={'flex'} alignItems={'center'} mb={2}>
                            <AddBoxRoundedIcon fontSize='medium' />
                            <Typography ml={1}>Create a playlist</Typography>
                        </Box>
                    </NavLink>
                    <NavLink to={'liked'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : unactiveStyle
                        }>
                        <Box display={'flex'} alignItems={'center'}>
                            <FavoriteIcon fontSize='medium' />
                            <Typography ml={1}>Liked titles</Typography>
                        </Box>
                    </NavLink>
                </nav>
            </Box>
        </>
    )
}

export default SideMenuNav