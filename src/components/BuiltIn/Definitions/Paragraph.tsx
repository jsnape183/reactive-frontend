import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import IReactiveComponent from "./Types";
import { generateJSXChildren } from "../../../Utils/reactive-codegen/generateJSXNodes";

const Paragraph: IReactiveComponent = {
  name: "Paragraph",
  toolboxIcon: <TextFields />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `<p id="${node.id}" className="${
        includeWrapper ? "designer-component" : ""
      }" style={{fontSize:"${props.fontSize}", textAlign:"${
        props.textAlign
      }"}}>${generateJSXChildren(node.children, includeWrapper)}</p>`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    fontSize: "12px",
    textAlign: "left",
  },
  allowsChildren: true,
};

export default Paragraph;
