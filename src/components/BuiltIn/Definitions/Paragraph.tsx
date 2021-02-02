import React from "react";
import TextFields from "@material-ui/icons/TextFields";
import { IReactiveComponent } from "../../Designer/Types";
import { TextPropsBox } from "../../Designer/Props";
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
      {
        name: "fontSize",
        defaultValue: "12px",
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
      {
        name: "textAlign",
        defaultValue: "12px",
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
    settings: [],
    data: [],
    interactions: [],
  },
  allowsChildren: true,
};

export default Paragraph;
