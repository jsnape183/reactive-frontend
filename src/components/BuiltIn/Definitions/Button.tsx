import React from "react";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { IReactiveComponent } from "../../Designer/Types";
import { generateJSXProps } from "../../../Utils/reactive-codegen/generateJSXNodes";
import { generateTextPropsBox } from "../../Designer/Props";

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
    styles: [],
    settings: [generateTextPropsBox("text", "text", "Click me!")],
    data: [],
    interactions: [],
  },
  allowsChildren: false,
};

export default Button;
