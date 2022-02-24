import React from "react";
import styled from "styled-components";

import numPadProperties from "../constants/numPadProperties";
import { CalculatorButton } from "./CalculatorButton";

const NumPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  background-color: black;
  height: 80%;
`;

export const CalculatorNumPad = ({
  num1,
  setNum1,
  operand,
  setOperand,
  num2,
  setNum2,
}) => {
  return (
    <NumPad>
      {numPadProperties.map(({ id, buttonLabel, value, type, customColor }) => {
        return (
          <CalculatorButton
            id={id}
            buttonLabel={buttonLabel}
            value={value}
            type={type}
            setNum1={setNum1}
            num1={num1}
            setOperand={setOperand}
            operand={operand}
            num2={num2}
            setNum2={setNum2}
            customColor={customColor}
          />
        );
      })}
    </NumPad>
  );
};
