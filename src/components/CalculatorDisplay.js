import React from "react";
import styled from "styled-components";

const DisplayNumber = styled.div`
  color: white;
`;

export const CalculatorDisplay = ({ num1 }) => {
  return <DisplayNumber>{num1}</DisplayNumber>;
};
