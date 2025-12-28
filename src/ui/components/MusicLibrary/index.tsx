import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MusicLibrary = () => {
  const [value, setValue] = useState(0);
  // @ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab label="Songs" {...a11yProps(0)} />
            <Tab label="Albums" {...a11yProps(1)} />
            <Tab label="Artists" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};
