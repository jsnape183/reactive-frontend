import React from "react";
import { TextField } from "@material-ui/core";
import { IPropComponentProps } from "./types";

export interface ITextBoxCustomProps {
  type: string;
}

const TextPropsBox: React.FC<IPropComponentProps> = ({
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
        onChange={(e) => onValueChanged(propKey, e.target.value)}
        {...customProps}
      />
    </>
  );
};

export default TextPropsBox;
