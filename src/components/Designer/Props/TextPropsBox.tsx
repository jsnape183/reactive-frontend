import React from "react";
import { TextField } from "@material-ui/core";
import { IPropComponentProps } from "./types";

const TextPropsBox: React.FC<IPropComponentProps> = ({
  name,
  value,
  onValueChanged,
}) => {
  return (
    <>
      <TextField
        id={name}
        key={name}
        label={name}
        value={value}
        onChange={(e) => onValueChanged(name, e.target.value)}
      />
    </>
  );
};

export default TextPropsBox;
