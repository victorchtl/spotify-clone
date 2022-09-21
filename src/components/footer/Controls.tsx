import { Box, Grid, Slider, Stack, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import music from '../../assets/audio/music.mp3'
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Controls: React.FC = () => {

  function timeConverter(seconds: number): string {
    const time: number = Math.floor(seconds);
    const min: number = Math.floor(time / 60);
    const sec: number = time - (min * 60);
    let minDisplay: string;
    let secDisplay: string;
    min < 10 ? minDisplay = `0${min}` : minDisplay = `${min}`
    sec < 10 ? secDisplay = `0${sec}` : secDisplay = `${sec}`
    return minDisplay + ':' + secDisplay
  }

  const ref = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMetadataLoaded, setIsMetadataLoaded] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [progressBar, setProgressBar] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);

  const { trackPosition: currentTrack, tracksList: currentTracksList, isPlaying: play } = useSelector((state: RootState) => state.audioPlayer)

  const onLoadedMetadata = () => {
    setIsMetadataLoaded(true);
    if (ref.current)
      setDuration(ref.current.duration);
  };

  const internalOnTimeUpdate = (): void => {
    if (ref.current) {
      const currentTime = ref.current.currentTime;
      if (duration > 0) {
        const value = (100 / duration) * currentTime;
        setProgressBar(value);
        setCurrentTime(currentTime);
      }
    }
  };

  const handleSliderChange = (event: Event, newValue: number | number[]): void => {
    if (ref.current) {
      ref.current.currentTime = (((newValue as number) * duration) / 100);
      setProgressBar(newValue as number);
    }
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]): void => {
    if (ref.current) {
      const newVolume = newValue as number
      ref.current.volume = newVolume / 100;
      setVolume(newVolume / 100);
    }
  };

  const toggleMuteAction = (): void => {
    if (ref.current) {
      const newMute = !ref.current.muted;
      if (newMute) setVolume(0)
      else setVolume(ref.current.volume)
      ref.current.muted = newMute;
      setIsMuted(newMute);

    }
  };

  const togglePlayPause = (): void => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!isPlaying && ref.current) {
      ref.current.play()
    } else if (ref.current) {
      ref.current.pause()
    }
  }

  const forwardTenSec = (): void => {
    if (ref.current) {
      const add10 = ref.current.currentTime + 10
      ref.current.currentTime = add10
      setCurrentTime(add10)
    }
  }

  const backwardTenSec = (): void => {
    if (ref.current) {
      const add10 = ref.current.currentTime - 10
      ref.current.currentTime = add10
      setCurrentTime(add10)
    }
  }


  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>

      <Grid item sx={{ display: 'flex' }}>
        <Box
          sx={{
            height: '50px',
            aspectRatio: '1',
            background: 'purple'
          }}
        />
        <Box ml={1}>
          <Typography>Title Name</Typography>
          <Typography variant='caption'>Artist</Typography>
        </Box>
      </Grid>

      <Grid item xs sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box display={'flex'} justifyContent={'center'}>
          {currentTracksList &&
            <audio
              onLoadedMetadata={onLoadedMetadata}
              ref={ref}
              onTimeUpdate={internalOnTimeUpdate}
              src={currentTracksList[currentTrack]}>
            </audio>
          }

          <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item sx={{ cursor: 'pointer' }}><SkipPreviousIcon /></Grid>
            <Grid item sx={{ cursor: 'pointer' }}><Box onClick={backwardTenSec}><Replay10Icon /></Box></Grid>
            <Grid item sx={{ cursor: 'pointer' }}>
              <Box onClick={togglePlayPause}>
                {isPlaying ? <PauseCircleIcon fontSize='large' /> : <PlayCircleIcon fontSize='large' />}
              </Box>
            </Grid>
            <Grid item sx={{ cursor: 'pointer' }}><Box onClick={forwardTenSec}><Forward10Icon /></Box></Grid>
            <Grid item sx={{ cursor: 'pointer' }}><SkipNextIcon /></Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '90%', maxWidth: '600px' }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Typography variant='caption'>{ref.current !== null ? timeConverter(currentTime) : '--:--'}</Typography>
            <Slider aria-label="music" value={progressBar} onChange={handleSliderChange} size="small" />
            <Typography variant='caption'>{ref.current !== null ? timeConverter(duration) : '--:--'}</Typography>
          </Stack>
        </Box>
      </Grid>

      <Grid item>
        <Box minWidth={'100px'} display={'flex'} alignItems={'center'} mr={2}>
          <Box mr={2} display={'flex'} alignItems={'center'} onClick={toggleMuteAction} sx={{ cursor: 'pointer' }}>
            {isMuted ? <VolumeOffIcon /> : volume > .5 ? <VolumeUp /> : <VolumeDownIcon />}

          </Box>
          <Slider size="small" aria-label="Volume" value={volume * 100} onChange={handleVolumeChange} />
        </Box>
      </Grid>

    </Grid>
  )
}

export default Controls