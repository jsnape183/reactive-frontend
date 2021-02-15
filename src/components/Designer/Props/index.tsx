import React from "react";
import ButtonGroupProps from "./ButtonGroupProps";
import ColorPickerProps from "./ColorPickerProps";
import DropDownListProps from "./DropDownListProps";
import NumberPropsBox from "./NumberPropsBox";
import SliderProps from "./SliderProps";
import TextDropDown, { ITextDropDownCustomProps } from "./TextDropDown";
import TextPropsBox, { ITextBoxCustomProps } from "./TextPropsBox";
import { IReactiveComponentProp } from "../Types";

export const generateComponent = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps: any,
  component: any
): IReactiveComponentProp => {
  return {
    key: key,
    heading: heading,
    subheading: subheading,
    name: name,
    defaultValue: defaultValue,
    component: (
      key: string,
      name: string,
      value: any,
      onChange: (key: string, value: any) => void
    ): React.ReactNode => (
      <>
        {React.createElement(component, {
          propKey: key,
          name,
          value,
          customProps,
          onValueChanged: onChange,
        })}
      </>
    ),
  };
};

export const generateButtonGroup = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps?: any
): IReactiveComponentProp =>
  generateComponent(
    key,
    heading,
    subheading,
    name,
    defaultValue,
    customProps,
    ButtonGroupProps
  );

export const generateColorPicker = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps?: any
): IReactiveComponentProp =>
  generateComponent(
    key,
    heading,
    subheading,
    name,
    defaultValue,
    customProps,
    ColorPickerProps
  );

export const generateDropDownList = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps?: any
): IReactiveComponentProp =>
  generateComponent(
    key,
    heading,
    subheading,
    name,
    defaultValue,
    customProps,
    DropDownListProps
  );

export const generateNumberBox = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps: any
): IReactiveComponentProp =>
  generateComponent(
    key,
    heading,
    subheading,
    name,
    defaultValue,
    customProps,
    NumberPropsBox
  );

export const generateSlider = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps: any
): IReactiveComponentProp =>
  generateComponent(
    key,
    heading,
    subheading,
    name,
    defaultValue,
    customProps,
    SliderProps
  );

export const generateTextDropDown = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps: ITextDropDownCustomProps
): IReactiveComponentProp =>
  generateComponent(
    key,
    heading,
    subheading,
    name,
    defaultValue,
    customProps,
    TextDropDown
  );

export const generateTextBox = (
  key: string,
  heading: string,
  subheading: string,
  name: string,
  defaultValue: any,
  customProps: ITextBoxCustomProps = { type: "text" }
): IReactiveComponentProp =>
  generateComponent(
    key,
    heading,
    subheading,
    name,
    defaultValue,
    customProps,
    TextPropsBox
  );
