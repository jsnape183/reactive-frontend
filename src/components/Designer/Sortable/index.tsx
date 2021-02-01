import React from "react";
import { ReactSortable } from "react-sortablejs";
import { ITreeNode } from "../Types";
import SortableNode from "./SortableNode";
import sortableOptions from "./sortableOptions";

interface ISortableProps {
  tree: ITreeNode[];
  onTreeChanged: (tree: ITreeNode[]) => void;
  nodeChildGenerator: (
    tree: ITreeNode,
    children?: React.ReactNode
  ) => React.ReactNode;
}

const Sortable: React.FC<ISortableProps> = ({
  tree,
  onTreeChanged,
  nodeChildGenerator,
}) => {
  const handleSetTree = (newTree: any) => {
    if (!!(newTree && newTree.constructor && newTree.call && newTree.apply)) {
      onTreeChanged(newTree(tree));
      return;
    }
    onTreeChanged(newTree);
  };

  return (
    <div>
      <ReactSortable list={tree} setList={handleSetTree} {...sortableOptions}>
        {tree.map((tree, treeIndex) => (
          <SortableNode
            key={tree.id}
            tree={tree}
            treeIndex={[treeIndex]}
            onTreeChanged={handleSetTree}
            nodeChildGenerator={nodeChildGenerator}
          />
        ))}
      </ReactSortable>
    </div>
  );
};

export default Sortable;
