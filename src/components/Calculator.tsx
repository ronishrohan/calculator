import React from "react";
import { Float } from "@react-three/drei";
import { CalculatorModel } from "./CalculatorModel";

function Calculator() {
  return (
    <Float>
      <CalculatorModel scale={0.6}></CalculatorModel>
    </Float>
  );
}

export default Calculator;
