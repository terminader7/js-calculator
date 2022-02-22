import React from "react";
import styled from "styled-components";

import numPadProperties from "../constants/numPadProperties";
import { CalculatorButton } from "./CalculatorButton";

const NumPad = styled.div``;

export const CalculatorNumPad = ({ setDisplay }) => {
  return (
    <NumPad>
      {numPadProperties.map(({ id, buttonLabel, display, type }) => {
        return (
          <CalculatorButton
            id={id}
            buttonLabel={buttonLabel}
            display={display}
            setDisplay={setDisplay}
            type={type}
          />
        );
      })}
    </NumPad>
  );
};
