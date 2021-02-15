import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { IPropComponentProps } from "./types";

const ButtonGroupProps: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  onValueChanged,
  customProps,
}) => {
  const handleClick = (valueName: string) => {
    const selectedValue = value.find((v: any) => v.value === valueName);
    const prevSelectedValue = value.find((v: any) => v.selected);

    selectedValue.selected = true;

    if (!prevSelectedValue) onValueChanged(propKey, value);

    prevSelectedValue.selected = false;
    onValueChanged(propKey, value);
  };

  return (
    <>
      <ButtonGroup size="small" {...customProps}>
        {value.map((v: any) => {
          return (
            <Button
              key={v.value}
              onClick={() => handleClick(v.value)}
              color={v.selected ? "secondary" : "primary"}
            >
              {v.value}
            </Button>
          );
        })}
      </ButtonGroup>
    </>
  );
};

export default ButtonGroupProps;
