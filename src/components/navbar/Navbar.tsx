import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <IconButton aria-label="back">
            <ArrowBackIosRoundedIcon />
          </IconButton>
          <IconButton aria-label="next">
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar