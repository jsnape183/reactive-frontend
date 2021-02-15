import React from "react";
import styled from "styled-components";
import { IPropComponentProps } from "../types";

const MarginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 250px;
  height: 200px;
  background-color: #eee;
`;

const MarginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 200px;
  background-color: #eee;
`;

const PaddingContent = styled(MarginContent)`
  width: 60px;
  height: 120px;
`;

const PaddingContainer = styled(MarginContainer)`
  width: 150px;
  height: 120px;
  border: 5px solid #fff;
`;

const CenterContainer = styled(PaddingContainer)`
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

const MarginPaddingPicker: React.FC<IPropComponentProps> = ({
  propKey,
  name,
  value,
  customProps,
  onValueChanged,
}) => {
  const setMargin = (direction: string, propValue: any) => {
    const newValue = { ...value };
    newValue.margin[direction] = propValue;
    onValueChanged(propKey, newValue);
  };

  const setPadding = (direction: string, propValue: any) => {
    const newValue = { ...value };
    newValue.padding[direction] = propValue;
    onValueChanged(propKey, newValue);
  };

  const setUnits = (units: string) => {
    value.units = units;
    onValueChanged(propKey, value);
  };
  return (
    <>
      <MarginContainer id="marginContainer">
        <InputContainer>
          <input
            type="text"
            value={value.margin.left}
            onChange={(e) => setMargin("left", e.target.value)}
          />
        </InputContainer>
        <MarginContent id="marginContent">
          <InputContainer>
            <input
              type="text"
              value={value.margin.top}
              onChange={(e) => setMargin("top", e.target.value)}
            />
          </InputContainer>
          <PaddingContainer id="paddingContainer">
            <InputContainer>
              <input
                type="text"
                value={value.padding.left}
                onChange={(e) => setPadding("left", e.target.value)}
              />
            </InputContainer>
            <PaddingContent id="paddingContent">
              <InputContainer>
                <input
                  type="text"
                  value={value.padding.top}
                  onChange={(e) => setPadding("top", e.target.value)}
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
                  value={value.padding.bottom}
                  onChange={(e) => setPadding("bottom", e.target.value)}
                />
              </InputContainer>
            </PaddingContent>
            <InputContainer>
              <input
                type="text"
                value={value.padding.right}
                onChange={(e) => setPadding("right", e.target.value)}
              />
            </InputContainer>
          </PaddingContainer>
          <InputContainer>
            <input
              type="text"
              value={value.margin.bottom}
              onChange={(e) => setMargin("bottom", e.target.value)}
            />
          </InputContainer>
        </MarginContent>
        <InputContainer>
          <input
            type="text"
            value={value.margin.right}
            onChange={(e) => setMargin("right", e.target.value)}
          />
        </InputContainer>
      </MarginContainer>
    </>
  );
};

export default MarginPaddingPicker;
