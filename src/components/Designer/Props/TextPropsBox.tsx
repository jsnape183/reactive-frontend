import React from "react";
import { TextField } from "@material-ui/core";
import { IPropComponentProps } from "./types";

const TextPropsBox: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
}) => {
  return (
    <>
      <TextField
        id={propKey}
        key={propKey}
        label={name}
        value={value}
        onChange={(e) => onValueChanged(propKey, e.target.value)}
      />
    </>
  );
};

export default TextPropsBox;
