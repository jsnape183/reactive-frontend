import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import { IPropComponentProps } from "./types";

const DropDownListProps: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
  customProps,
}) => {
  const handleChange = (valueName: string) => {
    const selectedValue = value.find((v: any) => v.value === valueName);
    const prevSelectedValue = value.find((v: any) => v.selected);

    selectedValue.selected = true;

    if (!prevSelectedValue) onValueChanged(propKey, value);

    prevSelectedValue.selected = false;
    onValueChanged(propKey, value);
  };

  return (
    <>
      <Select
        onChange={(e: any) => handleChange(e.target.value)}
        {...customProps}
      >
        {value.map((v: any) => {
          return (
            <MenuItem key={v.value} value={v.value}>
              {v.value}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default DropDownListProps;
