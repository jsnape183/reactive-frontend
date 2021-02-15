import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import { IReactiveComponent } from "../../Designer/Types";
import { generateTextBox } from "../../Designer/Props";
import { generateJSXChildren } from "../../../Utils/reactive-codegen/generateJSXNodes";
import stylesTemplate from "../../Designer/Props/stylesTemplate";

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
      generateTextBox("fontSize", "Font", "", "Font Size", "12px"),
      generateTextBox("textAlign", "Alignment", "", "Text Align", "left"),
      ...stylesTemplate,
    ],
    settings: [],
    data: [],
    interactions: [],
  },
  allowsChildren: true,
};

export default Paragraph;
