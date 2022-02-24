import React from "react";
import styled from "styled-components";

const DisplayNumber = styled.div`
  color: white;
`;

export const CalculatorDisplay = ({ num1, operand }) => {
  const getDisplayValue = () => {
    if (operand) {
      return operand;
    }
    return num1;
  };
  return <DisplayNumber>{getDisplayValue()}</DisplayNumber>;
};
