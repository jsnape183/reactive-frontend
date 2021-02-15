import React from "react";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { IReactiveComponent } from "../../Designer/Types";
import { generateTextBox } from "../../Designer/Props";
import stylesTemplate from "../../Designer/Props/stylesTemplate";

const Button: IReactiveComponent = {
  name: "Button",
  toolboxIcon: <IndeterminateCheckBoxIcon />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `<button id="${node.id}" className="${
        includeWrapper ? "designer-component" : ""
      }">${props.settings.text}</button>`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    styles: [...stylesTemplate],
    settings: [generateTextBox("text", "Text", "", "text", "Click me!")],
    data: [],
    interactions: [],
  },
  allowsChildren: false,
};

export default Button;
