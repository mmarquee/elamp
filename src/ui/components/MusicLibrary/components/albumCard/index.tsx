import { Card, CardContent } from "@mui/material";

type Props = {
  content?: string;
};

export const AlbumCard = ({ content }: Props) => {
  return (
    <Card>
      <CardContent>{content}</CardContent>
    </Card>
  );
};
