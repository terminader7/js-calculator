import React from "react";
import styled from "styled-components";

import numPadProperties from "../constants/numPadProperties";
import { CalculatorButton } from "./CalculatorButton";

const NumPad = styled.div``;

export const CalculatorNumPad = ({ num1, setNum1 }) => {
  return (
    <NumPad>
      {numPadProperties.map(({ id, buttonLabel, value, type }) => {
        return (
          <CalculatorButton
            id={id}
            buttonLabel={buttonLabel}
            value={value}
            type={type}
            setNum1={setNum1}
            num1={num1}
          />
        );
      })}
    </NumPad>
  );
};
