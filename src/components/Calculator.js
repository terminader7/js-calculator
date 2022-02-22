import React, { useState } from "react";
import styled from "styled-components";

import { CalculatorNumPad } from "./CalculatorNumPad";
import { CalculatorDisplay } from "./CalculatorDisplay";

const CalculatorContainer = styled.div`
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;
export const Calculator = () => {
  const [display, setDisplay] = useState("");

  return (
    <CalculatorContainer>
      <CalculatorNumPad setDisplay={setDisplay} />
      <CalculatorDisplay display={display} />
    </CalculatorContainer>
  );
};
