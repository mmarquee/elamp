import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

type Props = {
  content?: AlbumData;
};

const clickMe = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  console.log(event.target);
};

export const AlbumCard = ({ content }: Props) => {
  return (
    <Card
      sx={{ width: 125 }}
      key={`${content?.album}-${content?.artist}-${content?.year}`}
      onClick={(event) => {
        clickMe(event);
      }}>
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
