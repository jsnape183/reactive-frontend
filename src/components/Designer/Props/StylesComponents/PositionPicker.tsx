import React from "react";
import styled from "styled-components";
import { IPropComponentProps } from "../types";

const PositionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 250px;
  height: 200px;
  background-color: #eee;
`;

const PositionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 200px;
  background-color: #eee;
`;

const CenterContainer = styled(PositionContainer)`
  width: 50px;
  height: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-grow: 1;
  width: 30px;
  height: 30px;

  & input {
    width: 25px;
  }
`;

const PositionPicker: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  customProps,
  onValueChanged,
}) => {
  const setPosition = (direction: string, propValue: any) => {
    const newValue = { ...value };
    newValue[direction] = propValue;
    onValueChanged(propKey, newValue);
  };

  const setUnits = (units: string) => {
    value.units = units;
    onValueChanged(propKey, value);
  };
  return (
    <>
      <PositionContainer id="positionContainer">
        <InputContainer>
          <input
            type="text"
            value={value.left}
            onChange={(e) => setPosition("left", e.target.value)}
          />
        </InputContainer>
        <PositionContent id="positionContent">
          <InputContainer>
            <input
              type="text"
              value={value.top}
              onChange={(e) => setPosition("top", e.target.value)}
            />
          </InputContainer>
          <CenterContainer id="centreContainer">
            <select
              onChange={(e) => setUnits(e.target.value)}
              value={value.units}
            >
              <option value="px">px</option>
              <option value="%">%</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
            </select>
          </CenterContainer>
          <InputContainer>
            <input
              type="text"
              value={value.bottom}
              onChange={(e) => setPosition("bottom", e.target.value)}
            />
          </InputContainer>
        </PositionContent>
        <InputContainer>
          <input
            type="text"
            value={value.right}
            onChange={(e) => setPosition("right", e.target.value)}
          />
        </InputContainer>
      </PositionContainer>
    </>
  );
};

export default PositionPicker;
