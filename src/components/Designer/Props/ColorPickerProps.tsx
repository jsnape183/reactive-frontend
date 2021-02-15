import React from "react";
import ColorPicker from "material-ui-color-picker";
import { IPropComponentProps } from "./types";

const ColorPickerProps: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
  customProps,
}) => {
  return (
    <>
      <ColorPicker
        name={name}
        defaultValue={value}
        onChange={(color: string) => onValueChanged(propKey, color)}
        {...customProps}
      />
    </>
  );
};

export default ColorPickerProps;
