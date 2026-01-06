import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

type Props = {
  content?: AlbumData;
};

export const AlbumCard = ({ content }: Props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <MusicNoteIcon />
          <Typography gutterBottom variant="body1" component="div">
            {content?.album}
          </Typography>
          <Typography
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
