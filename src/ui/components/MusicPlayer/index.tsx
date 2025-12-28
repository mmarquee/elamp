import { useRef, useState } from "react";
import { PlayPauseButton } from "./components/PlayPauseButton";
import { TrackInfo } from "./components/TrackInfo";
import { Grid, Paper, Stack } from "@mui/material";
import styled from "@emotion/styled";

// @ts=ignore
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  textAlign: "center",
}));

export const MusicPlayer = () => {
  const progressBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState(55);
  const [volume, setVolume] = useState(1);

  const skipNext = () => {};

  const skipPrevious = () => {};

  const togglePlayPause = () => {
    if (isPlaying) {
      // audioRef.current.pause();
    } else {
      // audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // @ts-ignore
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    //audioRef.current.volume = newVolume;
  };
  /*
      return (
        <>
          <div className="player-container">
            
    
            <TrackInfo />
    
            <div className="play-controls">
              <PlayPauseButton
                isPlaying={isPlaying}
                togglePlayPause={togglePlayPause}
              />
            </div>
    
            <div className="right-controls">
              <input
                className="volume-slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </>
      );
      */

  return (
    <Stack spacing={2}>
      <Item>
        <div
          className="progress-bar-container"
          ref={progressBarRef}
          //                          onClick={seekAudio}
        >
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </Item>
      <Item>
        <Stack direction="row">
          <Item>
            <TrackInfo />
          </Item>
          <Item>
            <div className="play-controls">
              <PlayPauseButton
                isPlaying={isPlaying}
                skipNext={skipNext}
                skipPrevious={skipPrevious}
                togglePlayPause={togglePlayPause}
              />
            </div>
          </Item>
          <Item>
            <div className="right-controls">
              <input
                className="volume-slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </Item>
        </Stack>
      </Item>
    </Stack>
  );
};
