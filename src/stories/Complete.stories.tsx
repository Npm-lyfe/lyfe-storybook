import React from "react";
import { Complete } from "../components/Autocomplete";
import { Box } from "@mui/material";
import { AutocompleteMui } from "../components/Autocomplete/AutoCompleteMui";

export default {
  title: "Library/Complete",
  component: Complete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {
  //   options: {
  //     control: {
  //       type: "object",
  //     },
  //   },
  // },
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

export const Primary = () => {
  return (
    <Box component="form" width={"276px"}>
      <Complete
        value={[{ label: "The Shawshank Redemption", year: 1994 }]}
        helperText={"helper text"}
        title={"Disease *"}
        onValueChanged={(e) => {
          console.log("value", e);
        }}
        options={top100Films}
        freeSolo
        multiple
      />
      {/* <AutocompleteMui /> */}
    </Box>
  );
};
