import React, { useMemo } from "react";
import {
  Autocomplete,
  AutocompleteProps,
  Chip,
  TextFieldProps,
} from "@mui/material";
import { CustomTextField } from "../TextField";
import { get } from "lodash";

export interface CompleteBaseProps<
  TOption,
  TValueType extends "property" | "option" | undefined = "option",
  TValue = TOption,
> {
  labelProperty?: string;
  valueType?: TValueType;
  helperText?: string;
  error?: boolean;
  endAdornment?: React.ReactNode;
  InputProps?: TextFieldProps;
  onValueChanged?: (value: TValue | string) => void;
  value: TValue;
}

export interface CompletePropertyProps {
  property: string;
}

export interface CompleteOptionProps {
  property?: string;
}

type CompleteProps<
  TOption,
  TMultipleFlag extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  TValueType extends "property" | "option" | undefined,
  TValue = TOption,
> = Omit<
  AutocompleteProps<TOption, TMultipleFlag, DisableClearable, FreeSolo>,
  "renderInput"
> &
  CompleteBaseProps<TOption, TValueType, TValue> &
  (TValueType extends "property" ? CompletePropertyProps : CompleteOptionProps);

export const Complete = <
  TOption = any,
  TMultipleFlag extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  TValueType extends "property" | "option" | undefined = "option",
  TValue = TOption,
>(
  props: CompleteProps<
    TOption,
    TMultipleFlag,
    DisableClearable,
    FreeSolo,
    TValueType,
    TValue
  >
) => {
  const {
    options,
    valueType,
    value,
    helperText,
    error,
    labelProperty,
    property,
    endAdornment,
    InputProps,
    onValueChanged,
    ...other
  } = props;

  const isOptionMatched = (option: unknown, comparedValue: unknown) =>
    (property ? get(option, property) : option) ===
    (property && valueType !== "property"
      ? get(comparedValue, property as string)
      : comparedValue);

  const selectedOptions = useMemo(() => {
    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && valueType !== "property")
    ) {
      return null;
    }

    if (other.multiple) {
      return (options as Array<unknown>).filter((option) =>
        (value as Array<unknown>).some((subValue) =>
          isOptionMatched(option, subValue)
        )
      );
    }

    return (
      (options as Array<unknown>).find((option) =>
        isOptionMatched(option, value)
      ) ?? null
    );
  }, [options, value]);

  const getValueByOption = (selectedOption: any) =>
    props.valueType === "property" && typeof selectedOption !== "string"
      ? (selectedOption as any)?.[props.property as string]
      : selectedOption;

  const getNewControlValue = (newSelectedOptions: any) =>
    Array.isArray(newSelectedOptions)
      ? newSelectedOptions.map(getValueByOption)
      : getValueByOption(newSelectedOptions);

  return (
    <Autocomplete
      getOptionLabel={(option) => {
        return labelProperty
          ? (get(option, labelProperty) ?? "")
          : ((option as any).label ?? option);
      }}
      getOptionKey={(option) =>
        property ? (option as any)[property] : ((option as any).value ?? option)
      }
      value={selectedOptions as any}
      renderTags={(value: readonly TOption[], getTagProps) => {
        console.log("value", value);
        return value.map((option: TOption, index: number) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip variant="outlined" label={"option"} key={key} {...tagProps} />
          );
        });
      }}
      renderInput={(params) => (
        <CustomTextField
          error={error}
          helperText={helperText}
          label={other.title}
          {...params}
          {...InputProps}
          InputProps={{
            ...params.InputProps,
            ...InputProps?.InputProps,
            endAdornment: endAdornment || params.InputProps.endAdornment,
          }}
          inputProps={{
            ...params.inputProps,
            ...InputProps?.inputProps,
          }}
        />
      )}
      onChange={(_, newOptions) =>
        onValueChanged?.(getNewControlValue(newOptions))
      }
      onInputChange={(_, inputValue, reason) =>
        reason !== "reset" && props.freeSolo && onValueChanged?.(inputValue)
      }
      options={options ?? []}
      {...(other as Partial<
        AutocompleteProps<TOption, TMultipleFlag, DisableClearable, FreeSolo>
      >)}
    />
  );
};
