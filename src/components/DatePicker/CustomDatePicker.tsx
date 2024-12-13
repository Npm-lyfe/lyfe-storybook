// import React from "react";
// import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
// import { CustomTextField } from "../TextField";
// import { palette } from "../../palette";

// interface CustomDatePickerProps extends DatePickerProps<Date, any> {
//   errorText?: string;
//   canShowError?: boolean;
// }

// const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
//   label,
//   value,
//   errorText = "",
//   canShowError = false,
//   onChange,
//   ...passedDownProps
// }) => {
//   const handleSetValue = (newValue: Date | null, context: any) => {
//     if (onChange) onChange(newValue, context);
//   };

//   return (
//     <DatePicker
//       label={label}
//       value={value || null}
//       views={["year", "month", "day"]}
//       slots={{ textField: CustomTextField }}
//       slotProps={{
//         inputAdornment: {
//           position: "start",
//         },
//         textField: {
//           error: !!errorText && canShowError,
//           helperText: canShowError ? errorText : "",
//           // InputProps: {
//           //     ...(passedDownProps.InputProps as InputBaseProps),
//           // },
//           // InputLabelProps: {
//           //     shrink: true,
//           //     ...passedDownProps.InputLabelProps,
//           // },
//         },
//         popper: {
//           sx: {
//             ".MuiPaper-root": {
//               boxShadow: "0px 4px 12px 0px rgba(52, 64, 84, 0.08)",
//               borderRadius: "12px",
//             },
//             ".MuiPickersCalendarHeader-root": {
//               display: "grid",
//               gridTemplateColumns: "auto 1fr auto",
//             },
//             ".MuiPickersCalendarHeader-labelContainer": {
//               gridColumn: 2,
//               gridRow: 1,
//               justifySelf: "center",
//               margin: 0,
//             },
//             ".MuiPickersArrowSwitcher-root": {
//               display: "grid",
//               gridTemplateColumns: "subgrid",
//               gridColumn: "1 / 4",
//               gridRow: 1,
//               "& .MuiPickersArrowSwitcher-button": {
//                 color: palette.colors.gray[46],
//               },
//             },
//             ".MuiPickersCalendarHeader-label": {
//               color: palette.colors.gray[27],
//             },
//             "& .MuiDayCalendar-weekDayLabel": {
//               color: palette.colors.gray[27],
//               fontSize: "14px",
//               fontWeight: 500,
//             },
//             "& .MuiPickersDay-root": {
//               color: palette.colors.gray[27],
//               "&.Mui-selected": {
//                 color: palette.colors.base.white,
//                 backgroundColor: `${palette.colors.secondary.main} !important`,
//               },
//             },
//           },
//         },
//       }}
//       onChange={handleSetValue}
//       {...(passedDownProps as DatePickerProps<Date, any>)}
//     />
//   );
// };

// export default CustomDatePicker;
