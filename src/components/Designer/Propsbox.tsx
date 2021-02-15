import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ITreeNode, IReactiveComponentProp } from "./Types";
import { Button, ButtonGroup } from "@material-ui/core";
import { getBuiltInComponent } from "../BuiltIn/ComponentFactory";

interface IPropsboxProps {
  selectedNode: ITreeNode;
  selectedTab: string;
  onPropTabChanged: (tabName: string) => void;
  onPropChanged: (key: string, value: string) => void;
}

const Propsbox: React.FC<IPropsboxProps> = ({
  selectedNode,
  selectedTab,
  onPropTabChanged,
  onPropChanged,
}) => {
  const groupByHeadings = (props: any[]) => {
    let tmpObj: any = {};
    const uniqueHeadings = [
      ...Array.from(new Set<string>(props.map((prop: any) => prop.heading))),
    ];
    const uniqueSubheadings = [
      ...Array.from(
        new Set<any>(
          props.map((prop: any) => ({
            heading: prop.heading,
            subheading: prop.subheading,
          }))
        )
      ),
    ];
    uniqueHeadings.forEach((heading: string) => {
      let tmpSubHeading: any = {};
      uniqueSubheadings
        .filter((ush: any) => ush.heading === heading)
        .forEach((subheading: any) => {
          tmpSubHeading[subheading.subheading] = props.filter(
            (p) =>
              p.heading === heading && p.subheading === subheading.subheading
          );
        });
      tmpObj[heading] = tmpSubHeading;
    });

    return tmpObj;
  };

  const getAllProps = (selectedTab: string) => {
    return Object.keys(selectedNode.props[selectedTab]).map((key: string) => {
      const component = getBuiltInComponent(selectedNode.type);
      const prop = component?.props[selectedTab].find(
        (p: IReactiveComponentProp) => p.key === key
      );
      return prop;
    });
  };

  const allProps: any[] = getAllProps(selectedTab);
  const groupedHeadings: any = groupByHeadings(allProps);

  return (
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => onPropTabChanged("styles")}>CSS</Button>
        <Button onClick={() => onPropTabChanged("settings")}>S</Button>
        <Button onClick={() => onPropTabChanged("data")}>D</Button>
        <Button onClick={() => onPropTabChanged("interactions")}>I</Button>
      </ButtonGroup>
      {Object.keys(groupedHeadings).map((headingKey: string) => {
        return (
          <>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {headingKey}
              </AccordionSummary>
              <AccordionDetails>
                {Object.keys(groupedHeadings[headingKey]).map(
                  (subheadingKey: string) => {
                    return (
                      <>
                        <div>{subheadingKey}</div>

                        {groupedHeadings[headingKey][subheadingKey].map(
                          (prop: any) => {
                            return prop.component(
                              prop.key,
                              prop.name,
                              prop.defaultValue,
                              (key: string, value: any) =>
                                onPropChanged(key, value)
                            );
                          }
                        )}
                      </>
                    );
                  }
                )}
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </>
  );
};

export default Propsbox;
