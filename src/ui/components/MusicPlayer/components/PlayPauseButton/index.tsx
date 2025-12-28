import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

type Props = {
  isPlaying: boolean;
  togglePlayPause: () => void;
  skipPrevious: () => void;
  skipNext: () => void;
};

export const PlayPauseButton = ({
  togglePlayPause,
  isPlaying,
  skipPrevious,
  skipNext,
}: Props) => {
  return (
    <>
      <button onClick={skipPrevious}>
        <SkipPreviousIcon />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
      </button>
      <button>
        <SkipNextIcon onClick={skipNext} />
      </button>
    </>
  );
};
