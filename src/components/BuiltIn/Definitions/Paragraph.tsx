import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import { IReactiveComponent } from "../../Designer/Types";
import { generateTextPropsBox } from "../../Designer/Props";
import { generateJSXChildren } from "../../../Utils/reactive-codegen/generateJSXNodes";

const Paragraph: IReactiveComponent = {
  name: "Paragraph",
  toolboxIcon: <TextFields />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `<p id="${node.id}" className="${
        includeWrapper ? "designer-component" : ""
      }" style={{fontSize:"${props.styles.fontSize}", textAlign:"${
        props.styles.textAlign
      }"}}>${generateJSXChildren(node.children, includeWrapper)}</p>`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    styles: [
      generateTextPropsBox("fontSize", "Font Size", "12px"),
      generateTextPropsBox("textAlign", "Text Align", "left"),
    ],
    settings: [],
    data: [],
    interactions: [],
  },
  allowsChildren: true,
};

export default Paragraph;
