import React from "react";
import { TextField } from "@material-ui/core";
import { IPropComponentProps } from "../types";

const SizingBox: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
  customProps,
}) => {
  return (
    <>
      <TextField
        id={`${propKey}_basis`}
        key={`${propKey}_basis`}
        label="Basis"
        value={value}
        onChange={(e) =>
          onValueChanged(propKey, { ...value, basis: e.target.value })
        }
        {...customProps}
      />
      <TextField
        id={`${propKey}_grow`}
        key={`${propKey}_grow`}
        label="Grow"
        value={value}
        onChange={(e) =>
          onValueChanged(propKey, { ...value, grow: e.target.value })
        }
        {...customProps}
      />
      <TextField
        id={`${propKey}_shirnk`}
        key={`${propKey}_shrink`}
        label="Shrink"
        value={value}
        onChange={(e) =>
          onValueChanged(propKey, { ...value, shrink: e.target.value })
        }
        {...customProps}
      />
    </>
  );
};

export default SizingBox;
