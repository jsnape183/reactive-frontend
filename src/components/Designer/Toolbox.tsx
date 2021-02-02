import React from "react";
import { getBuiltInComponents } from "../BuiltIn/ComponentFactory";
import { IReactiveComponent } from "../Designer/Types";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

interface IToolboxProps {
  onComponentClick: (component: IReactiveComponent) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    componentsGrid: {
      width: "100%",
      height: "40vh",
      overflowY: "scroll",
    },
  })
);

const Toolbox: React.FC<IToolboxProps> = ({ onComponentClick }) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.componentsGrid}>
      {getBuiltInComponents().map((component: IReactiveComponent) => {
        return (
          <Grid direction="row" item xs={6}>
            <IconButton
              color="primary"
              aria-label="Text"
              component="span"
              onClick={() => onComponentClick(component)}
            >
              {component.toolboxIcon}
            </IconButton>
            <div>{component.name}</div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Toolbox;
