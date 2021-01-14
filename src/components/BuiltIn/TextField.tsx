import React from "react";
import {
  TextField as MaterialTextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { UserComponent, useNode } from "@craftjs/core";

interface TextFieldPropTypes {
  label: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
}

export const TextField: UserComponent<TextFieldPropTypes> = ({
  label,
  variant = "standard",
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialTextField
      ref={(ref) => connect(drag(ref))}
      label={label}
      variant={variant}
    />
  );
};

const TextFieldSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Label</FormLabel>
        <MaterialTextField
          label="Enter label Text..."
          onChange={(e) => setProp((props) => (props.label = e.target.value))}
        />
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup
          defaultValue={props.variant}
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <FormControlLabel
            label="Standard"
            value="standard"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Outlined"
            value="outlined"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Filled"
            value="filled"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

TextField.craft = {
  props: {
    variant: "standard",
    label: "Label",
  },
  related: {
    settings: TextFieldSettings,
  },
};
