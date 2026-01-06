import { Card, CardContent } from "@mui/material";

type Props = {
  content?: AlbumData;
};

export const AlbumCard = ({ content }: Props) => {
  return (
    <Card>
      <CardContent>{content?.album}/{content?.artist}/{content?.year}</CardContent>
    </Card>
  );
};
