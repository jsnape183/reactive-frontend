import React from "react";
import { ITreeNode } from "./Types";
import TextField from "@material-ui/core/TextField";

interface IPropsboxProps {
  selectedNode: ITreeNode;
  onPropChanged: (key: string, value: string) => void;
}

const Propsbox: React.FC<IPropsboxProps> = ({
  selectedNode,
  onPropChanged,
}) => {
  return (
    <>
      {Object.keys(selectedNode.props).map((key: string) => (
        <TextField
          id={key}
          key={key}
          label={key}
          value={selectedNode.props[key]}
          onChange={(e) => onPropChanged(key, e.target.value)}
        />
      ))}
    </>
  );
};

export default Propsbox;
