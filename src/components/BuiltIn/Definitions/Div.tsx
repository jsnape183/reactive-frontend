import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { IReactiveComponent } from "../../Designer/Types";
import { generateJSXChildren } from "../../../Utils/reactive-codegen/generateJSXNodes";
import stylesTemplate from "../../Designer/Props/stylesTemplate";
import { generateStylesProps } from "../../Designer/Props/StylesComponents";

const Div: IReactiveComponent = {
  name: "Div",
  toolboxIcon: <CheckBoxOutlineBlankIcon />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `<div id="${node.id}" className="${
        includeWrapper ? "designer-component" : ""
      }"
      ${generateStylesProps(props.styles)}>${generateJSXChildren(
        node.children,
        includeWrapper
      )}</div>`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    styles: [...stylesTemplate],
    settings: [],
    data: [],
    interactions: [],
  },
  allowsChildren: true,
};

export default Div;
