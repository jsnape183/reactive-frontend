import React from "react";
import { TextField, Select, MenuItem } from "@material-ui/core";
import { IPropComponentProps } from "./types";

interface ITextFieldCustomProps {
  type: string;
}

export interface ITextDropDownCustomProps {
  textField: ITextFieldCustomProps;
}

const TextDropDown: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
  customProps,
}) => {
  const handleTextChanged = (textValue: string) => {
    value.text = textValue;
    onValueChanged(propKey, value);
  };

  const handleDropDownChanged = (selectedValue: string) => {
    const newValue: any = value.selectList.find(
      (s: any) => s.value === selectedValue
    );
    const currentValue: any = value.selectList.find((s: any) => s.selected);
    currentValue.selected = false;
    newValue.selected = true;
    onValueChanged(propKey, value);
  };

  return (
    <div>
      <TextField
        defaultValue={value.text}
        onChange={(e: any) => handleTextChanged(e.target.value)}
        {...customProps.textField}
      />
      <Select
        value={value.selectList.find((s: any) => s.selected).value}
        onChange={(e: any) => handleDropDownChanged(e.target.value)}
      >
        {value.selectList.map((s: any) => (
          <MenuItem key={s.value} value={s.value}>
            {s.value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default TextDropDown;
