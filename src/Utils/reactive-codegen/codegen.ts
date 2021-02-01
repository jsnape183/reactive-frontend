import { generateJSXNodes } from "./generateJSXNodes";
import { generateImportsFromTree } from "./materialUIMappings";
import { ITreeNode } from "../../components/Designer/Types";

export const generateProject = (code: string): any => {
  return {
    files: {
      "public/index.html": `<div id="root"></div>`,
      "src/App.js": code,
      "src/index.js": `import React from "https://jspm.dev/react";
          import ReactDOM from "https://jspm.dev/react-dom";
          
          import App from "./App";
          
          ReactDOM.render(<App />, document.getElementById("root"));`,
    },
    title: "Dynamically Generated Project",
    description: "Created with <3 by the StackBlitz SDK!",
    template: "create-react-app",
    tags: ["stackblitz", "sdk"],
    dependencies: {
      moment: "*",
      "@material-ui/core": "4.11.2",
      "@types/react": "17.0.1",
      "@babel/runtime": "7.12.5",
    },
  };
};

const generateReactFromTree = (
  tree: ITreeNode[],
  includeWrapper: boolean = false
): string => {
  return generateComponent(tree, includeWrapper);
};

const generateComponent = (
  tree: ITreeNode[],
  includeWrapper: boolean = false
): string => {
  const nodes = tree.map((t) => generateJSXNodes(t, includeWrapper));
  const jsx = nodes.join(`
  `);
  return `import React from "https://jspm.dev/react";
    ${generateImportsFromTree(tree)}
    const App = () =>{
        return (<>${jsx}</>);
    }
    
    export default App;
    `;
};

export default generateReactFromTree;
