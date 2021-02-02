import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import { IReactiveComponent } from "../../Designer/Types";
import { generateTextPropsBox } from "../../Designer/Props";

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
    styles: [],
    settings: [generateTextPropsBox("text", "text", "Hello world!")],
    data: [],
    interactions: [],
  },
  allowsChildren: false,
};

export default Text;
