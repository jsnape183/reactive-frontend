import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { IReactiveComponent } from "../../Designer/Types";
import {
  generateJSXProps,
  generateJSXChildren,
} from "../../../Utils/reactive-codegen/generateJSXNodes";

const Div: IReactiveComponent = {
  name: "Div",
  toolboxIcon: <CheckBoxOutlineBlankIcon />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `<div id="${node.id}" className="${
        includeWrapper ? "designer-component" : ""
      }">${generateJSXChildren(node.children, includeWrapper)}</div>`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    styles: [],
    settings: [],
    data: [],
    interactions: [],
  },
  allowsChildren: true,
};

export default Div;
