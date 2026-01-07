import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

type Props = {
  content?: AlbumData;
};

export const AlbumCard = ({ content }: Props) => {
  return (
    <Card sx={{width: 125}}>
      <CardActionArea>
        <CardContent>
          <MusicNoteIcon />
          <Typography noWrap gutterBottom variant="body1" component="div">
            {content?.album}
          </Typography>
          <Typography
            noWrap 
            variant="body2"
            component="div"
            sx={{ color: "text.secondary" }}>
            {content?.artist} ({content?.year})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
