import React from "react";
import { Box } from "@mui/material";
import { CustomTextField } from "../components/TextField";

export default {
  title: "Library/Inputs/CustomTextField",
  component: CustomTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
    errorMessage: {
      control: {
        type: "string",
      },
    },
  },
};

export const Default = () => {
  return (
    <Box component="form" width={"276px"}>
      <CustomTextField
        id="outlined-basic"
        value={"john doe@gen.com"}
        label="Email address"
        helperText="Hint text for the user."
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export const TextFieldDisabled = () => {
  return (
    <Box component="form" width={"276px"}>
      <CustomTextField
        id="outlined-basic"
        disabled
        label="Outlined"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export const TextFieldError = () => {
  return (
    <Box component="form" width={"276px"}>
      <CustomTextField
        id="outlined-basic"
        error
        value={"wrong data"}
        label="Outlined"
        errorMessage="Error explanation"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export const TextArea = () => {
  return (
    <Box component="form" width={"276px"}>
      <CustomTextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
        multiline
        minRows={5}
        placeholder="Type your comment here ..."
      />
    </Box>
  );
};
