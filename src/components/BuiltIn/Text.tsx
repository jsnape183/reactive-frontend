import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { UserComponent, useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel } from "@material-ui/core";

interface TextPropTypes {
  text: string;
  fontSize: number;
  textAlign?: string;
}

export const Text: UserComponent<TextPropTypes> = ({
  text,
  fontSize,
  textAlign = "left",
}) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ border: selected ? "1px solid #ff0000" : "none" }}
      onClick={(e) => setEditable(true)}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
      </FormControl>
    </>
  );
};

Text.craft = {
  props: {
    text: "Text...",
    fontSize: 12,
  },
  related: {
    settings: TextSettings,
  },
};
