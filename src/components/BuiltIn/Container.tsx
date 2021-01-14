import React from "react";
import { FormControl, FormLabel, Slider, Paper } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import { UserComponent, useNode } from "@craftjs/core";

interface ContainerPropTypes {
  background: string;
  padding: number;
}

export const Container: UserComponent<ContainerPropTypes> = ({
  background,
  padding = 0,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <Paper style={{ margin: "5px 0", background, padding: `${padding}px` }}>
        {children}
      </Paper>
    </div>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          defaultValue={background || "#000"}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value))}
        />
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
