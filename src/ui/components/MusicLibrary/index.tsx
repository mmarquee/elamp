import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import type { IAudioMetadata } from "music-metadata";
import { useState } from "react";
import { AlbumCard } from "./components/albumCard";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// List of file metadata

type Props = {
  albums: (AlbumData | undefined)[];
};

export const MusicLibrary = ({ albums }: Props) => {
  //const [value, setValue] = useState(0);

  // @ts-ignore
  //  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //    setValue(newValue);
  //  };

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
