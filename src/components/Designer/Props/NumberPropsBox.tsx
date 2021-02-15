import React from "react";
import { TextField } from "@material-ui/core";
import { IPropComponentProps } from "./types";

const NumberPropsBox: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
  customProps,
}) => {
  return (
    <>
      <TextField
        id={propKey}
        key={propKey}
        label={name}
        value={value}
        type="number"
        onChange={(e) => onValueChanged(propKey, e.target.value)}
        {...customProps}
      />
    </>
  );
};

export default NumberPropsBox;
