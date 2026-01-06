//import { useEffect, useState } from "react";
//import reactLogo from "./assets/react.svg";
import {
  Box,
  Container,
  createTheme,
  Paper,
  Stack,
  styled,
  ThemeProvider,
} from "@mui/material";
//import "./App.css";
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
  /*
  const [stats, setStats] = useState<Statistics>({ cpuUsage: 0 });

  useEffect(() => {
    window.electron.subscribeStatistics((stats) => {
      console.log({ stats });
      setStats(stats);
    });
  }, []);
*/

  const [loaded, setLoaded] = useState<boolean>(false);

  const [metaData, setMetaData] = useState<any[]>([]);
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
          console.log(result);
          setAlbums(result.albums);
        })
        .catch((err) => console.log(err));
    }
  }, [loaded]);

  useEffect(() => {
    console.log("Albums:", { albums });
  }, [albums]);

  /*
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid>
            <MusicLibrary />
          </Grid>
          <Grid>
            <MusicPlayer />
          </Grid>
        </Grid>
      </ThemeProvider>
  */

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
