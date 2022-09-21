import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../store'

const PublicRoute: React.FC = () => {

    const { userData: currentUser } = useSelector((state: RootState) => state.user)

    return (
        !currentUser ? <Outlet /> : <Navigate to="/" />
    )
}

export default PublicRoute