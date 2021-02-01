import React from "react";
import { ITreeNode } from "../Types";
import SortableNodeGroup from "./SortableNodeGroup";

interface ISortableNodeProps {
  tree: ITreeNode;
  treeIndex: number[];
  onTreeChanged: (tree: ITreeNode[]) => void;
  nodeChildGenerator: (
    tree: ITreeNode,
    children?: React.ReactNode
  ) => React.ReactNode;
}

const SortableNode: React.FC<ISortableNodeProps> = ({
  tree,
  treeIndex,
  onTreeChanged,
  nodeChildGenerator,
}) => {
  if (!tree) return null;
  if (tree.allowsChildren) {
    return (
      <>
        {nodeChildGenerator(
          tree,
          <SortableNodeGroup
            key={tree.id}
            tree={tree}
            onTreeChanged={onTreeChanged}
            treeIndex={treeIndex}
            nodeChildGenerator={nodeChildGenerator}
          />
        )}
      </>
    );
  } else {
    return <>{nodeChildGenerator(tree, null)}</>;
  }
};

export default SortableNode;
