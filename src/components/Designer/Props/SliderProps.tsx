import React from "react";
import { Slider } from "@material-ui/core";
import { IPropComponentProps } from "./types";

const SliderProps: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
  customProps,
}) => {
  return (
    <>
      <Slider
        value={value}
        onChange={(event: any, newValue: number | number[]) =>
          onValueChanged(propKey, newValue)
        }
        {...customProps}
      />
    </>
  );
};

export default SliderProps;
