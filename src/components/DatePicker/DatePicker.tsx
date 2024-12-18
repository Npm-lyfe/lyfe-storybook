import React from "react";
import { InputLabel, InputLabelProps, styled } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { palette } from "../../palette";
import { CustomTextField } from "../TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { enGB } from "date-fns/locale";

const StyledLabel: React.FC<InputLabelProps> = styled(
  InputLabel
)<InputLabelProps>({
  fontSize: "0.8rem",
  color: palette.colors.gray[34],
  fontWeight: 700,
});

export interface UIDatePickerProps extends DatePickerProps<Date> {
  label?: string;
  id?: string;
}

export const UIDatePicker = ({ label, id, ...props }: UIDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
      {label && (
        <StyledLabel style={{ margin: 0 }} shrink htmlFor={id}>
          {label}
        </StyledLabel>
      )}
      <DatePicker
        slots={{ textField: CustomTextField }}
        slotProps={{
          //   openPickerButton: {
          //     color: "primary",
          //   },
          inputAdornment: {
            position: "start",
          },
          //   textField: {
          //     onClick: () => setOpen(true),
          //     InputProps: {
          //       startAdornment: (
          //         <img
          //           className="mr-[8px] h-[14px] w-[14px]"
          //           src={calendarGrayIcon}
          //           alt="calendar"
          //         />
          //       ),
          //       classes: {
          //         root: styles.input.root,
          //         notchedOutline: styles.input.notchedOutline,
          //       },
          //     },
          //   },
          popper: {
            sx: {
              ".MuiPaper-root": {
                boxShadow: "0px 4px 12px 0px rgba(52, 64, 84, 0.08);",
                borderRadius: "12px",
              },
              ".MuiPickersCalendarHeader-root": {
                // backgroundColor: "lightblue",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
              },
              ".MuiPickersCalendarHeader-labelContainer": {
                gridColumn: 2,
                gridRow: 1,
                justifySelf: "center",
                margin: 0,
              },
              ".MuiPickersArrowSwitcher-root": {
                display: "grid",
                gridTemplateColumns: "subgrid",
                gridColumn: "1 / 4",
                gridRow: 1,
                "& .MuiPickersArrowSwitcher-button": {
                  color: palette.colors.gray[46],
                },
              },
              ".MuiPickersCalendarHeader-label": {
                color: palette.colors.gray[27],
              },
              "& .MuiDayCalendar-weekDayLabel": {
                color: palette.colors.gray[27],
                fontSize: "14px",
                fontWeight: 500,
              },
              "& .MuiPickersDay-root": {
                color: palette.colors.gray[27],
                "&.Mui-selected": {
                  color: palette.colors.base.white,
                  backgroundColor: `${palette.colors.secondary.main} !important`,
                },
              },
            },
          },
        }}
        label={""}
        {...props}
      />
    </LocalizationProvider>
  );
};
