import React from "react";
import Sortable from "../Designer/Sortable";
import { ITreeNode } from "./Types";

interface ILayersProps {
  tree: ITreeNode[];
  selectedNode?: ITreeNode | null | undefined;
  onTreeChanged: (tree: ITreeNode[]) => void;
  onSelectNode: (node: ITreeNode) => void;
}

const GroupStyles = {
  padding: "10px",
};

const NodeStyles = {
  border: "1px solid #eee",
  padding: "10px",
};

const SelectedNodeStyles = {
  backgroundColor: "#ccc",
  border: "1px solid #eee",
  padding: "10px",
};

const Layers: React.FC<ILayersProps> = ({
  tree,
  selectedNode,
  onTreeChanged,
  onSelectNode,
}) => {
  const handleClick = (tree: ITreeNode) => {
    onSelectNode(tree);
  };
  const applyNodeStyles = (node: ITreeNode) => {
    if (!selectedNode) return NodeStyles;
    if (node.id === selectedNode.id) return SelectedNodeStyles;

    return NodeStyles;
  };
  return (
    <div style={{ overflow: "auto" }}>
      <Sortable
        tree={tree}
        onTreeChanged={onTreeChanged}
        nodeChildGenerator={(tree: ITreeNode, children: React.ReactNode) => (
          <>
            <div key={tree.id} style={GroupStyles}>
              <div
                style={applyNodeStyles(tree)}
                onClick={(e) => handleClick(tree)}
              >
                {tree.type}
              </div>
              <div key={`{tree.id}_children`}>
                {children && <>{children}</>}
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default Layers;
