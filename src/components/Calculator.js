import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { CalculatorNumPad } from "./CalculatorNumPad";
import { CalculatorDisplay } from "./CalculatorDisplay";

const CalculatorContainer = styled.div`
  display: flex;
  width: 340px;
  height: 450px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  gap: 10px;
  flex-direction: column;
`;
export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operand, setOperand] = useState("");

  // const [expression, setExpression] = useState({ another way of setting state as an object, alternative to the above
  //   num1: "0",
  //   num2:"0",
  //   operand:"",
  // })

  // decimal needs to print only once.
  // = needs to complete our equation with the two numbers
  // give mathematical functionality to our operands
  // operands can only print once
  // styling
  // our clear needs to clear our display and not just print an empty string
  // MAYBE AN ISSUE, be able to "string together" equations might not be a problem though

  return (
    <CalculatorContainer>
      <CalculatorDisplay num1={num1} operand={operand} num2={num2} />
      <CalculatorNumPad
        setNum1={setNum1}
        num1={num1}
        operand={operand}
        setOperand={setOperand}
        num2={num2}
        setNum2={setNum2}
      />
    </CalculatorContainer>
  );
};
