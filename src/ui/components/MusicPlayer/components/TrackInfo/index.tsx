import styled from "@emotion/styled";
import { Paper, Stack } from "@mui/material";

// @ts=ignore
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  textAlign: "center",
}));

export const TrackInfo = () => {
  return (
    <Item>
      <div
        className="album-cover"
        //style={{ backgroundImage: `url('${model.art}')` }}  /* Use the model for album art */
      ></div>
      <Stack>
        <Item>TITLE</Item>
        <Item>ARTIST</Item>
      </Stack>
    </Item>
  );
};
