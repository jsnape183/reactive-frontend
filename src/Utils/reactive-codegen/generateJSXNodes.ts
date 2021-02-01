import { getBuiltInComponent } from "../../components/BuiltIn/ComponentFactory";
import IReactiveComponent from "../../components/BuiltIn/Definitions/Types";
import { ITreeNode } from "../../components/Designer/Types";

export const generateJSXNodes = (
  node: ITreeNode,
  includeWrapper: boolean = false
): string => {
  const mappedComponent = resolveComponent(node.type);

  if (!mappedComponent && node.children.length > 0)
    return generateJSXChildren(node.children, includeWrapper);

  if (!mappedComponent) return "";

  return mappedComponent.code.component(node, node.props, includeWrapper);
};

export const resolveComponent = (
  type: string
): IReactiveComponent | undefined => {
  return getBuiltInComponent(type) as IReactiveComponent;
};

export const generateJSXChildren = (
  nodes: ITreeNode[],
  includeWrapper: boolean = false
): string => {
  let nodeString = "";
  nodes.forEach((node) => {
    nodeString = `${nodeString} 
    ${generateJSXNodes(node, includeWrapper)}`;
  });
  return nodeString;
};

export const generateJSXProps = (props: any, ignore: string = ""): string => {
  const mappedProps = Object.keys(props).map((key) => {
    if (key === ignore) return null;
    return typeof props[key] === "string"
      ? `${key}="${props[key]}"`
      : `${key} = {${props[key]}}`;
  });

  return mappedProps.filter((prop) => prop).join(" ");
};

export default generateJSXNodes;
