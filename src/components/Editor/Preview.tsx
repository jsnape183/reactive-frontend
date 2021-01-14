import React, { useEffect } from "react";
import sdk from "@stackblitz/sdk";

interface PreviewPropTypes {
  project: any;
}

const Preview: React.FC<PreviewPropTypes> = ({ project }) => {
  useEffect(() => {
    console.log(project);
    sdk.embedProject("preview-container", project, {
      height: 900,
      view: "both",
      hideNavigation: true,
      hideExplorer: true,
    });
  }, [project]);

  return <div id="preview-container" />;
};

export default Preview;
