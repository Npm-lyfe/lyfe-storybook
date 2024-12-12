// import React from "react";
import { InputLabel, InputLabelProps, styled } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { palette } from "../../theme";
import updateLocale from "dayjs/plugin/updateLocale";

import dayjs, { Dayjs } from "dayjs";
import { CustomTextField } from "../TextField";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekStart: 1,
});

const StyledLabel: React.FC<InputLabelProps> = styled(
  InputLabel
)<InputLabelProps>({
  fontSize: "0.8rem",
  color: palette.colors.gray[34],
  fontWeight: 700,
});

export interface UIDatePickerProps<TDate extends Dayjs>
  extends DatePickerProps<TDate> {
  label?: string;
  id?: string;
}

export const UIDatePicker = <TDate extends Dayjs>({
  label,
  id,
  ...props
}: UIDatePickerProps<TDate>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
