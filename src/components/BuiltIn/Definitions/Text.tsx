import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import { IReactiveComponent } from "../../Designer/Types";
import { TextPropsBox } from "../../Designer/Props";

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
    settings: [
      {
        name: "text",
        defaultValue: "Hello world!",
        component: (
          name: string,
          value: any,
          onChange: (key: string, value: any) => void
        ) => (
          <>
            <TextPropsBox name={name} value={value} onValueChanged={onChange} />
          </>
        ),
      },
    ],
    data: [],
    interactions: [],
  },
  allowsChildren: false,
};

export default Text;
