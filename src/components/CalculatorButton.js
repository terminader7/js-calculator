import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: black;
`;
export const CalculatorButton = ({
  id,
  buttonLabel,
  value,
  type,
  setNum1,
  num1,
  operand,
  setOperand,
}) => {
  const handleClick = () => {
    switch (type) {
      case "input":
        console.log(value);
        console.log(num1);
        setNum1(num1 + value);
        break;
      case "operand":
        setOperand(value);
        break;
    }
  };

  return (
    <div>
      <Button
        id={id}
        onClick={() => {
          handleClick();
        }}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};
