import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivateRoute from './routes/PrivateRoute';
import Search from './pages/Search';
import Library from './pages/Library';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import LikedTitles from './pages/LikedTitles';
import Playlist from './pages/Playlist';
import { lightBlue } from '@mui/material/colors';
import Login from './pages/Login';
import PublicRoute from './routes/PublicRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const App: React.FC = () => {

  const queryClient = new QueryClient()

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: lightBlue['A400']
      }
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="library" element={<Library />} />
            <Route path="playlist/:id" element={<Playlist />} />
            <Route path="liked" element={<LikedTitles />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
