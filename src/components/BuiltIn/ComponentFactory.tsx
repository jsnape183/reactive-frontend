import { Div, Button, Paragraph, Text } from "./Definitions";
import IReactiveComponent from "./Definitions/Types";

export const getBuiltInComponent = (
  componentType: string
): IReactiveComponent | undefined => {
  let component = getBuiltInComponents().find(
    (bi: IReactiveComponent) => bi.name === componentType
  );

  if (!component) {
    throw new Error(`Component ${componentType} does not exist.`);
  }

  return component;
};

export const getBuiltInComponents = (): IReactiveComponent[] => {
  const builtInComponents: IReactiveComponent[] = [
    Button,
    Div,
    Paragraph,
    Text,
  ];
  return builtInComponents;
};

export type { IReactiveComponent };
