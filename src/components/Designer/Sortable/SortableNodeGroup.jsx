import React from "react";
import { ReactSortable } from "react-sortablejs";
import SortableNode from "./SortableNode";
import sortableOptions from "./sortableOptions";

const SortableNodeGroup = ({
  tree,
  treeIndex,
  onTreeChanged,
  nodeChildGenerator,
}) => {
  return (
    <>
      <ReactSortable
        key={tree.id}
        list={tree.children}
        setList={(currentList) => {
          onTreeChanged((sourceList) => {
            const tempList = [...sourceList];
            const _treeIndex = [...treeIndex];
            const lastIndex = _treeIndex.pop();

            const lastArr = _treeIndex.reduce(
              (arr, i) => arr[i]["children"],
              tempList
            );
            lastArr[lastIndex]["children"] = currentList;
            return tempList;
          });
        }}
        {...sortableOptions}
      >
        {tree.children &&
          tree.children.map((childTree, index) => {
            return (
              <SortableNode
                key={childTree.id}
                tree={childTree}
                treeIndex={[...treeIndex, index]}
                onTreeChanged={onTreeChanged}
                nodeChildGenerator={nodeChildGenerator}
              />
            );
          })}
      </ReactSortable>
    </>
  );
};

export default SortableNodeGroup;
