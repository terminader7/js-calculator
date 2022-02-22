import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: grey;
`;
export const CalculatorButton = ({
  id,
  buttonLabel,
  setDisplay,
  display,
  type,
}) => {
  const handleClick = (display, type) => {
    switch (type) {
      case "input":
        console.log(type);
        setDisplay(display);
        break;
      case "operand":
        console.log(type);
        setDisplay(display);
        break;
    }
  };

  return (
    <div>
      <Button id={id} onClick={handleClick(display, type)}>
        {buttonLabel}
      </Button>
    </div>
  );
};
