import React from "react";
import { Frame, Element } from "@craftjs/core";
import { Grid } from "@material-ui/core";
import Preview from "./Preview";

interface ViewportProps {
  showPreview: boolean;
  project: any;
}

const Viewport: React.FC<ViewportProps> = ({ showPreview, project }) => {
  return (
    <Grid container spacing={1}>
      {!showPreview && (
        <>
          <Grid item xs>
            <>
              <Frame>
                <Element
                  is="div"
                  canvas
                  style={{ width: "100%", height: "70vh" }}
                ></Element>
              </Frame>
            </>
          </Grid>
        </>
      )}

      {showPreview && (
        <Grid item xs={12}>
          <Preview project={project.generatedProject} />
        </Grid>
      )}
    </Grid>
  );
};

export default Viewport;
