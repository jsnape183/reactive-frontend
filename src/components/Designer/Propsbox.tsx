import React from "react";
import { ITreeNode, IReactiveComponentProp } from "./Types";
import { Button, ButtonGroup } from "@material-ui/core";
import { getBuiltInComponent } from "../BuiltIn/ComponentFactory";

interface IPropsboxProps {
  selectedNode: ITreeNode;
  selectedTab: string;
  onPropTabChanged: (tabName: string) => void;
  onPropChanged: (key: string, value: string) => void;
}

const Propsbox: React.FC<IPropsboxProps> = ({
  selectedNode,
  selectedTab,
  onPropTabChanged,
  onPropChanged,
}) => {
  return (
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => onPropTabChanged("styles")}>CSS</Button>
        <Button onClick={() => onPropTabChanged("settings")}>S</Button>
        <Button onClick={() => onPropTabChanged("data")}>D</Button>
        <Button onClick={() => onPropTabChanged("interactions")}>I</Button>
      </ButtonGroup>

      {Object.keys(selectedNode.props[selectedTab]).map((key: string) => {
        const component = getBuiltInComponent(selectedNode.type);
        const value = selectedNode.props[selectedTab][key];
        if (!component) return <></>;
        console.log({ selectedTab, key });
        console.log(component.props[selectedTab]);
        const prop = component.props[selectedTab].find(
          (p: IReactiveComponentProp) => p.name === key
        );
        if (!prop) return <></>;
        return prop.component(key, value, (key: string, value: any) =>
          onPropChanged(key, value)
        );
      })}
    </>
  );
};

export default Propsbox;
