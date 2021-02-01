import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import IReactiveComponent from "./Types";
import { generateJSXProps } from "../../../Utils/reactive-codegen/generateJSXNodes";

const Button: IReactiveComponent = {
  name: "Button",
  toolboxIcon: <IndeterminateCheckBoxIcon />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `<button id="${node.id}" className="${
        includeWrapper ? "designer-component" : ""
      }" ${generateJSXProps(props, "text")}>${props.text}</button>`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    text: "Click me!",
  },
  allowsChildren: false,
};

export default Button;
