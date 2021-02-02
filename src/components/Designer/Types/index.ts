import React from "react";
export interface ITreeNodePropGroups {
  [key: string]: any | undefined;
  styles: any;
  settings: any;
  data: any;
  interactions: any;
}
export interface ITreeNode {
  id: string;
  type: string;
  props: ITreeNodePropGroups;
  children: ITreeNode[];
  allowsChildren: boolean;
}

export interface IReactiveComponentProp {
  name: string;
  component: (
    name: string,
    value: any,
    onChange: (key: string, value: any) => void
  ) => React.ReactNode;
  defaultValue: any;
}

export interface IReactiveComponentPropGroups {
  [key: string]: any | undefined;
  styles: IReactiveComponentProp[];
  settings: IReactiveComponentProp[];
  data: IReactiveComponentProp[];
  interactions: IReactiveComponentProp[];
}

export interface IReactiveCode {
  component: (node: any, props: any, includeWrapper: boolean) => any;
  imports: string;
  importsFrom: string;
  defaultImport: boolean;
}

export interface IReactiveComponent {
  name: string;
  toolboxIcon: any;
  code: IReactiveCode;
  props: IReactiveComponentPropGroups;
  allowsChildren: boolean;
}
