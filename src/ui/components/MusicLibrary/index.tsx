import { Box, Container, Grid } from "@mui/material";
import { AlbumCard } from "./components/albumCard";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type Props = {
  albums: (AlbumData | undefined)[];
};

export const MusicLibrary = ({ albums }: Props) => {
  if (!albums) return <></>;

  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Grid
          sx={{ flexGrow: 1 }}
          spacing={0}
          container
          justifyContent="space-evenly">
          {albums.map((row) => (
            <AlbumCard content={row} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
