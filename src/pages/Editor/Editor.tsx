import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Paper, Grid } from "@material-ui/core";
import { Toolbox } from "../../components/Editor/Toolbox";
import { SettingsPanel } from "../../components/Editor/SettingsPanel";
import { TopBar } from "../../components/Editor/TopBar";
import Preview from "../../components/Editor/Preview";
import { Container } from "../../components/BuiltIn/Container";
import { Button } from "../../components/BuiltIn/Button";
import { Card } from "../../components/BuiltIn/Card";
import { Text } from "../../components/BuiltIn/Text";
import { TextField } from "../../components/BuiltIn/TextField";
import { updateProject } from "../../store/actions/project";
import { selectProject } from "../../store/selectors/project";

import generateReactFromTree, {
  generateProject,
} from "../../Utils/reactive-codegen/codegen";

import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

const Editor = () => {
  const dispatch = useDispatch();
  const project = useSelector(selectProject);
  const [showPreview, setShowPreview] = useState(false);

  const nodesChange = (query: any) => {
    const tree = query.getSerializedNodes();
    console.log(tree);
    const code = generateReactFromTree(tree);
    const project = generateProject(code);
    dispatch(
      updateProject({
        generatedProject: project,
        generatedCode: code,
        tree: tree,
      })
    );
  };

  return (
    <>
      <div style={{ margin: "0 auto", width: "800px" }}>
        <Typography variant="h5" align="center">
          A super simple page editor
        </Typography>
        <CraftEditor
          resolver={{ Card, Button, Text, Container, TextField }}
          onNodesChange={nodesChange}
        >
          <TopBar onTogglePreview={() => setShowPreview(true)} />
          <Grid container spacing={3} style={{ paddingTop: "10px" }}>
            {!showPreview && (
              <>
                <Grid item xs>
                  <Frame>
                    <Element
                      is={Container}
                      padding={5}
                      background="#eee"
                      canvas
                    ></Element>
                  </Frame>
                </Grid>
                <Grid item xs={3}>
                  <Paper>
                    <Toolbox />
                    <SettingsPanel />
                  </Paper>
                </Grid>
              </>
            )}

            {showPreview && (
              <Grid item xs={12}>
                <Preview project={project.generatedProject} />
              </Grid>
            )}
          </Grid>
        </CraftEditor>
      </div>
    </>
  );
};

export default Editor;
