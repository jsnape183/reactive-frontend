import React, { useState } from "react";
import { uuid } from "uuidv4";
import { Grid } from "@material-ui/core";
import Designer from "../../components/Designer";
import Layers from "../../components/Designer/Layers";
import Toolbox from "../../components/Designer/Toolbox";
import Propsbox from "../../components/Designer/Propsbox";
import {
  ITreeNode,
  IReactiveComponentProp,
} from "../../components/Designer/Types";
import { IReactiveComponent } from "../../components/BuiltIn/ComponentFactory";

const NewEditor = () => {
  const [tree, setTree] = useState([
    {
      id: uuid(),
      type: "Div",
      props: {
        styles: {},
        settings: {},
        data: {},
        interactions: {},
      },
      allowsChildren: true,
      children: [],
    },
  ] as ITreeNode[]);

  const [selectedNode, setSelectedNode] = useState(tree[0]);
  const [selectedPropTab, setSelectedPropTab] = useState("styles");

  const findTreeNodeById = (
    tree: ITreeNode[],
    id: string
  ): ITreeNode | undefined | null => {
    for (const node of tree) {
      if (node.id === id) {
        return node;
      }

      let foundNode = findTreeNodeById(node.children, id);

      if (foundNode) return foundNode;
    }

    return null;
  };

  const copyProps = (props: IReactiveComponentProp[]) => {
    const copied: any = {} as any;
    props.forEach((p: IReactiveComponentProp) => {
      copied[p.name] = p.defaultValue;
    });
    return copied;
  };

  const handleComponentClick = (component: IReactiveComponent) => {
    const newComponent: ITreeNode = {
      id: uuid(),
      type: component.name,
      allowsChildren: component.allowsChildren,
      children: [] as ITreeNode[],
      props: {
        styles: copyProps(component.props.styles),
        settings: copyProps(component.props.settings),
        data: copyProps(component.props.data),
        interactions: copyProps(component.props.interactions),
      },
    };
    const newTree = [...tree];
    const node = findTreeNodeById(newTree, selectedNode.id);
    if (!node)
      throw Error(`Could not find component with id: ${selectedNode.id}`);
    if (!node.allowsChildren) return false;
    node.children.push(newComponent);
    setTree(newTree);
  };

  const handlePropChanged = (key: string, value: string) => {
    const newTree = [...tree];
    const node = findTreeNodeById(newTree, selectedNode.id);
    if (!node)
      throw Error(`Could not find component with id: ${selectedNode.id}`);
    node.props[selectedPropTab][key] = value;
    setTree(newTree);
  };

  return (
    <Grid container direction="row">
      <Grid item xs={3} spacing={2}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Toolbox onComponentClick={handleComponentClick} />
          </Grid>
          <Grid item xs={12}>
            <Layers
              tree={tree}
              selectedNode={selectedNode}
              onTreeChanged={(newTree: ITreeNode[]) => setTree(newTree)}
              onSelectNode={(node: ITreeNode) => setSelectedNode(node)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} spacing={2}>
        <Designer tree={tree}></Designer>
      </Grid>
      <Grid item xs={3} spacing={2}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Propsbox
              selectedNode={selectedNode}
              selectedTab={selectedPropTab}
              onPropTabChanged={(tabName: string) =>
                setSelectedPropTab(tabName)
              }
              onPropChanged={handlePropChanged}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewEditor;
