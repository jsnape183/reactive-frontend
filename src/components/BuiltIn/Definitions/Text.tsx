import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import IReactiveComponent from "./Types";

const Text: IReactiveComponent = {
  name: "Text",
  toolboxIcon: <TextFields />,
  code: {
    component: (node: any, props: any, includeWrapper: boolean) => {
      return `${props.text}`;
    },
    imports: "",
    importsFrom: "",
    defaultImport: false,
  },
  props: {
    text: "Hello world!",
  },
  allowsChildren: false,
};

export default Text;
