import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  grid-column: span ${(props) => props.spanColumn}; //injecting in a function, runs function, passes props as argument, if we passed a span value in our props inject it here
  grid-row: span ${(props) => props.spanRow};
  background-color: ${(props) => props.getButtonColor};
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
  num2,
  setNum2,
}) => {
  const handleClick = () => {
    switch (type) {
      case "input":
        console.log(num2);
        console.log(value);
        setNum1(num1 + value);
        setNum2(num2 + value);
        break;
      case "operand":
        setOperand(value);
        break;
    }
  };
  const getSpanValueColumn = () => {
    if (type === "zero" || type === "clear") {
      return 2;
    }
    return 1;
  };
  const getSpanValueRow = () => {
    if (type === "equals") {
      return 2;
    }
    return 1;
  };
  const getButtonColor = () => {
    if (type === "equals") {
      return "#2469c9";
    } else if (type === "clear") {
      return "#db2121";
    } else if (type === "operand") {
      return "#828181";
    } else {
      return "#525252";
    }
  };
  return (
    <Button
      id={id}
      onClick={() => {
        handleClick();
      }}
      spanColumn={getSpanValueColumn()}
      spanRow={getSpanValueRow()}
      getButtonColor={getButtonColor()}
    >
      {buttonLabel}
    </Button>
  );
};
