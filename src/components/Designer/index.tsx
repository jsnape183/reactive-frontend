import React, { useEffect, useState } from "react";
import { ITreeNode } from "./Types";
import generateReactFromTree from "../../Utils/reactive-codegen/codegen";
import { transpileModule } from "../../Utils/transpiler";
import "./styles.css";

interface IDesignerProps {
  tree: ITreeNode[];
}

const Designer: React.FC<IDesignerProps> = ({ tree }) => {
  const [transpiled, setTranspiled] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const mapTargets = (node: ITreeNode, accumulator: string[]): string[] => {
    accumulator.push(node.id);

    node.children.forEach((c) => {
      mapTargets(c, accumulator);
    });

    return accumulator;
  };

  useEffect(() => {
    const module = generateReactFromTree(tree, true);
    //console.log(module);
    //console.log(transpileModule(module));
    const transpiled = `
    import ReactDOM from "https://jspm.dev/react-dom";
    ${transpileModule(module)}

    ReactDOM.render(
      React.createElement(App, null),
      document.getElementById("designer")
    );`;

    let designerScript = document.getElementById("designerScript");
    if (designerScript) {
      designerScript.outerHTML = "";
    }
    let scriptElm = document.createElement("script");
    scriptElm.setAttribute("id", "designerScript");
    scriptElm.setAttribute("type", "module");
    let inlineCode = document.createTextNode(transpiled);
    scriptElm.appendChild(inlineCode);
    document.body.appendChild(scriptElm);
  }, [tree]);

  useEffect(() => {
    var elem = document.getElementById("designer");
    if (!elem) return;
    //elem.addEventListener("mousedown", handleClick);
    //elem.addEventListener("mouseover", handleMouseOver);
  });

  const getTargetId = (path: any): string | null | undefined => {
    const targetIds: string[] = [] as string[];
    tree.forEach((t: ITreeNode) => mapTargets(t, targetIds));
    const ids = path.find(
      (p: any) => p && p.id && p.id !== "" && targetIds.find((t) => t === p.id)
    );

    if (!ids) return null;

    return ids.id;
  };

  const handleClick = (event: any) => {
    const id = getTargetId(event.path);

    var elems: Element[] = Array.from(
      document.getElementsByClassName("designer-component-selected")
    );

    elems.forEach((e) => {
      e.setAttribute("class", "designer-component");
    });

    if (!id) return;
    document
      .getElementById(id)
      ?.setAttribute("class", "designer-component designer-component-selected");

    setSelectedId(id);
  };

  const handleMouseOver = (event: any) => {
    const id = getTargetId(event.path);

    if (!id) return;

    var elems: Element[] = Array.from(
      document.getElementsByClassName("designer-component-hover")
    );

    elems.forEach((e) => {
      e.setAttribute("class", "designer-component");
    });

    if (
      document
        .getElementById(id)
        ?.getAttribute("class")
        ?.includes("designer-component-selected")
    ) {
      console.log("ids match");
      return;
    }

    document
      .getElementById(id)
      ?.setAttribute("class", "designer-component designer-component-hover");
  };

  return <div id="designer"></div>;
};

export default Designer;
