import React from "react";
import { Float } from "@react-three/drei";
import { CalculatorModel } from "./CalculatorModel";

function Calculator() {
  return (
    <Float floatIntensity={0.2} >
      <CalculatorModel scale={0.3} ></CalculatorModel>
    </Float>
  );
}

export default Calculator;
