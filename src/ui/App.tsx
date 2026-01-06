import {
  Box,
  Container,
  createTheme,
  Paper,
  Stack,
  styled,
  ThemeProvider,
} from "@mui/material";
import { MusicLibrary } from "./components/MusicLibrary";
import { MusicPlayer } from "./components/MusicPlayer";
import { deepPurple, pink } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: pink,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const App = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [albums, setAlbums] = useState<Array<AlbumData | undefined>>([]);

  useEffect(() => {
    window.electron.loadComplete((msg) => {
      console.log("Got loaded message", { msg });
      setLoaded(true);
    });
  });

  useEffect(() => {
    if (loaded) {
      window.electron
        .getAlbums()
        .then((result) => {
          setAlbums(result.albums);
        })
        .catch((err) => console.log(err));
    }
  }, [loaded]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box>
            <Stack>
              <Item>
                <MusicLibrary albums={albums} />
              </Item>
              <Item>
                <MusicPlayer />
              </Item>
            </Stack>
          </Box>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
