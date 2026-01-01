import {
  Box,
  Container,
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// List of file metadata

type Props = {
  metaData: any[];
};

export const MusicLibrary = ({ metaData }: Props) => {
  //const [value, setValue] = useState(0);

  // @ts-ignore
//  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//    setValue(newValue);
//  }; 

  if (!metaData) return <></>

  return (
    <Container maxWidth="sm">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {metaData.map((row) => (
              <TableRow 
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.common ? row.common.title: "UNKNOWN"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};
