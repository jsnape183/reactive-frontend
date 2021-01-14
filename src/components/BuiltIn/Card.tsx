// components/user/Card.js
import React from "react";
import { Text } from "./Text";
import { ContainerSettings, ContainerDefaultProps } from "./Container";
import {
  Card as MaterialCard,
  CardActionArea,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { UserComponent, useNode, Element } from "@craftjs/core";

interface CardPropTypes {}

export const Card: UserComponent<CardPropTypes> = () => {
  return (
    <MaterialCard>
      <CardActionArea>
        <Element id="CardActionArea" canvas>
          <Text text="Header" textAlign="left" fontSize={12} />
        </Element>
      </CardActionArea>
      <CardContent>
        <Element id="CardContent" canvas>
          <Text text="Body" textAlign="left" fontSize={12} />
        </Element>
      </CardContent>
      <CardActions>
        <Element id="CardActions" canvas>
          <Text text="Footer" textAlign="left" fontSize={12} />
        </Element>
      </CardActions>
    </MaterialCard>
  );
};

Card.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
