import React from "react";
import { Box } from "@mui/material";
import { UIDatePicker } from "../components/DatePicker";

export default {
  title: "Library/Inputs/DatePicker",
  component: UIDatePicker,
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

export const Primary = () => {
  return (
    <Box component="form" width={"276px"}>
      <UIDatePicker
        id={"date-picker"}
        views={["year", "month", "day"]}
      ></UIDatePicker>
    </Box>
  );
};
