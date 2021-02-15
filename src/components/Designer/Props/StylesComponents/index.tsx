import MarginPaddingPicker from "./MarginPaddingPicker";
import SizingBox from "./SizingBox";
import PositionPicker from "./PositionPicker";
import { generateComponent } from "../";
import { IReactiveComponentProp } from "../../Types";

export const generateStylesProps = (value: any): string => {
  return `style={{ ${generateMarginPaddingPickerProps(
    value.marginAndPadding
  )}, ${generateLayoutProps(value)} }}`;
};

const generateLayoutProps = (value: any) => {
  return `flex:1, flexDirection:"${
    value.direction.find((v: any) => v.selected)?.value
  }"`;
};

const generateMarginPaddingPickerProps = (value: any): string => {
  const margin = { ...value.margin };
  const padding = { ...value.padding };
  return `margin: "${margin.top}${value.units} ${margin.right}${value.units} ${margin.bottom}${value.units} ${margin.left}${value.units}",
    padding:"${padding.top}${value.units} ${padding.right}${value.units} ${padding.bottom}${value.units} ${padding.left}${value.units}"`;
};

export const generateMarginPaddingPicker = (
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
    MarginPaddingPicker
  );

export const generatePositionPicker = (
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
    PositionPicker
  );

export const generateSizingBox = (
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
    SizingBox
  );
