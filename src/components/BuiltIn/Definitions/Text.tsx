import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import { IReactiveComponent } from "../../Designer/Types";
import { generateTextBox } from "../../Designer/Props";
import stylesTemplate from "../../Designer/Props/stylesTemplate";

const Text: IReactiveComponent = {
  name: "Text",
  toolboxIcon: <TextFields />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `${props.settings.text}`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    styles: [...stylesTemplate],
    settings: [generateTextBox("text", "Text", "", "text", "Hello world!")],
    data: [],
    interactions: [],
  },
  allowsChildren: false,
};

export default Text;
