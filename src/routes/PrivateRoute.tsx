import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import BottomNav from '../components/footer/BottomNav'
import Controls from '../components/footer/Controls'
import SideMenu from '../components/SideMenu/SideMenu'
import '../css/PrivateRoute.css'
import { RootState } from '../store'

const PrivateRoute: React.FC = () => {

  const { userData: currentUser } = useSelector((state: RootState) => state.user)

  return (
    <>

 
      <Box sx={{ width: '100%', height: 'calc(100vh - 94.5px)' }}>

        <Box
          display={'flex'}
          width={'100%'}
          height={'100%'}
          sx={{ background: 'black' }}>

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'block'
              },
              width: '240px',
              background: '#121212',
              borderRadius: '8px'
            }}
            m={1}>
            <SideMenu />
          </Box>

          <Box
            sx={{
              borderRadius: '8px',
              width: {
                xs: '100%',
                md: 'calc(100% - 240px)'
              },
              background: '#121212',
              overflow: 'auto'
            }}
            m={1}
            p={2}>
            <Outlet />
          </Box>

        </Box>


      </Box>
      <Box sx={{ background: 'black' }} p={1}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Controls />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <BottomNav />
        </Box>
      </Box>


    </>
  )
}

export default PrivateRoute