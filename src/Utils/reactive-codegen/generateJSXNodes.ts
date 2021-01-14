const generateJSXNodes = (
  nodeName: string,
  tree: any,
  nodeMappings: any
): string => {
  const node = tree[nodeName];
  const mappedComponent = nodeMappings[resolveJSXType(node)];

  return mappedComponent.component(node, tree);
};

export const resolveJSXType = (node: any) => {
  return node.type.resolvedName ? node.type.resolvedName : node.type;
};

export const generateJSXChildren = (
  nodes: string[],
  tree: any,
  nodeMappings: any
): string => {
  let nodeString = "";
  nodes.forEach((node) => {
    nodeString = `${nodeString} 
    ${generateJSXNodes(node, tree, nodeMappings)}`;
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
