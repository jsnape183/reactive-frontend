import React from "react";
import { Editor as CraftEditor } from "@craftjs/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TopBar from "./TopBar";

const appBarHeight: number = 40;

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    marginTop: appBarHeight,
  },
  grid: {
    width: "100%",
    height: "100vh",
  },
  paperLeft: {
    width: "100%",
    height: "90vh",
  },
  paperTop: {
    height: "20%",
  },
  paperMain: {
    height: "90vh",
  },
  paperRight: {},
  paperBottom: { height: "20%" },
  paper: {
    textAlign: "center",
  },
}));

interface EditorLayoutProps {
  leftContent: React.ReactNode;
  mainContent: React.ReactNode;
  rightContent: React.ReactNode;
  onNodesChanged: (query: any) => void;
  onTogglePreview: (value: boolean) => void;
  showPreview: boolean;
}

const EditorLayout: React.FC<EditorLayoutProps> = ({
  leftContent,
  mainContent,
  rightContent,
  onNodesChanged,
  onTogglePreview,
  showPreview,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CraftEditor resolver={{}} onNodesChange={onNodesChanged}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TopBar
              onTogglePreview={(value: boolean) => onTogglePreview(value)}
              showPreview={showPreview}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item container xs={12} spacing={0}>
            <Grid item xs={3}>
              <Paper className={`${classes.paperLeft} ${classes.paper}`}>
                {leftContent}
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={`${classes.paperMain} ${classes.paper}`}>
                {mainContent}
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={`${classes.paperLeft} ${classes.paper}`}>
                {rightContent}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </CraftEditor>
    </div>
  );
};

export default EditorLayout;
