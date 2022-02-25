import React from "react";
import styled from "styled-components";

const DisplayNumber = styled.div`
  @font-face {
    font-family: "Digital";
    src: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot");
    src: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix")
        format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2")
        format("woff2"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff")
        format("woff"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf")
        format("truetype"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7")
        format("svg");
  }
  color: white;
  background-color: black;
  text-align: right;
  padding-right: 5px;
  border-radius: 5px;
  font-size: 50px;
  font-family: Digital;
`;

export const CalculatorDisplay = ({ num1, operand, num2 }) => {
  const getDisplayValue = () => {
    if (num2 !== "") {
      return num2 || "0";
    }
    if (operand) {
      //if operand is truthy and
      return operand;
    }
    return num1 || "0";
  };
  return <DisplayNumber>{getDisplayValue()}</DisplayNumber>;
};
