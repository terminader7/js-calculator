import React, { useState } from "react";
import styled from "styled-components";

import { CalculatorNumPad } from "./CalculatorNumPad";
import { CalculatorDisplay } from "./CalculatorDisplay";

const CalculatorContainer = styled.div``;
export const Calculator = () => {
  const [display, setDisplay] = useState("");

  return (
    <CalculatorContainer>
      <CalculatorNumPad setDisplay={setDisplay} />
      <CalculatorDisplay display={display} />
    </CalculatorContainer>
  );
};
