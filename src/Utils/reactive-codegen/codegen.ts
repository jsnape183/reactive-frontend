import {
  generateFromRoot,
  generateImportsFromTree,
} from "./materialUIMappings";

export const generateProject = (code: string): any => {
  return {
    files: {
      "public/index.html": `<div id="root"></div>`,
      "src/App.js": code,
      "src/index.js": `import React from "react";
          import ReactDOM from "react-dom";
          
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

const generateReactFromTree = (tree: any): string => {
  return generateComponent(tree);
};

const generateComponent = (tree: any): string => {
  const jsx = generateFromRoot(tree);

  return `import React from "react";
    ${generateImportsFromTree(tree)}
    const App = () =>{
        return (${jsx});
    }
    
    export default App;
    `;
};

export default generateReactFromTree;
