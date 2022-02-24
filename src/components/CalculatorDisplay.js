import React from "react";
import styled from "styled-components";

const DisplayNumber = styled.div`
  color: black;
  background-color: white;
  text-align: right;
  padding-right: 5px;
  height: 15%;
  border-radius: 5px;
`;

export const CalculatorDisplay = ({ num1, operand, num2 }) => {
  const getDisplayValue = () => {
    if (operand) {
      return operand;
    }
    return num1 || num2;
  };
  return <DisplayNumber>{getDisplayValue()}</DisplayNumber>;
};
