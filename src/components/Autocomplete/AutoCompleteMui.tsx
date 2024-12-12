import React, { useMemo } from "react";
import { Autocomplete, Chip } from "@mui/material";
import { CustomTextField } from "../TextField";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

export const AutocompleteMui = () => {
  return (
    <Autocomplete
      multiple
      id="tags-filled"
      options={top100Films.map((option) => option.title)}
      defaultValue={[top100Films[1]!.title]}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip variant="outlined" label={option} key={key} {...tagProps} />
          );
        })
      }
      renderInput={(params) => (
        <CustomTextField {...params} label="freeSolo" placeholder="Favorites" />
      )}
    />
  );
};
