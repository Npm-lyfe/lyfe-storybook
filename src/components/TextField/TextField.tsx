import React from "react";
import { styled } from "@mui/material/styles";
import {
  InputLabel,
  InputLabelProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { palette } from "../../theme";

const StyledTextField: React.FC<TextFieldProps> = styled(
  TextField
)<TextFieldProps>(({ error }) => ({
  "& .MuiFormHelperText-root": {
    position: "absolute",
    top: "100%",
    padding: 0,
    margin: 0,
    marginTop: 6,
    fontSize: "0.8rem",
    fontWeight: 400,
    color: palette.colors.gray[34],
    "&.Mui-error": {
      color: palette.colors.error[40],
    },
  },
  "& .MuiOutlinedInput-input": {
    height: 20,
    padding: "8px 12px",
    fontWeight: 400,
    color: palette.colors.base.black,
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-disabled": {
      backgroundColor: palette.colors.gray[98],
      "-webkit-text-fill-color": palette.colors.gray[46],
    },
  },

  "& .MuiOutlinedInput-root": {
    // TODO: only for autotcomplete its moving icon in datepicker
    // padding: 0,
    "&:hover fieldset": {
      border: `2px solid ${palette.colors.primary.main}`,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${palette.colors.primary.main}`,
      boxShadow: `0px 0px 0px 2px ${error ? palette.colors.error[96] : palette.colors.secondary[90]}`,
    },
    "&.Mui-disabled  .MuiOutlinedInput-notchedOutline": {
      borderColor: palette.colors.gray[84],
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: palette.colors.error[40],
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: 8,
    borderColor: palette.colors.gray[84],
  },
}));

const StyledLabel: React.FC<InputLabelProps> = styled(
  InputLabel
)<InputLabelProps>({
  fontSize: "0.8rem",
  color: palette.colors.gray[34],
  fontWeight: 700,
});

export interface ICustomTextField {
  errorMessage?: string;
}

export const CustomTextField: React.FC<TextFieldProps & ICustomTextField> = (
  props
) => (
  <>
    {props.label && (
      <StyledLabel style={{ margin: 0 }} shrink htmlFor={props.id}>
        {props.label}
      </StyledLabel>
    )}

    <StyledTextField
      {...props}
      label=""
      helperText={props.errorMessage ? props.errorMessage : props.helperText}
    />
  </>
);
