import React, { useEffect, useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { useAtomValue } from "jotai";
import { display } from "../store/calculation";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

function CalculatorDisplay() {
  const displayValue = useAtomValue(display);
  const calculatorRef = useRef();
  const calculatorRef2 = useRef();
  const [size, setSize] = useState(0.2);
  const [max, setMax] = useState(0.1);

  useEffect(() => {
    if (calculatorRef.current) {
      if (
        Math.min(0, calculatorRef.current.geometry.boundingBox.max.x) !=
        calculatorRef.current.geometry.boundingBox.max.x
      ) {
        setMax(calculatorRef.current.geometry.boundingBox.max.x);
      }
    }
  }, [calculatorRef.current?.geometry?.boundingBox.max.x]);
  useEffect(() => {
    console.log(displayValue)
    if (displayValue.length == 0) {
      setSize(0);
    } else {
      setSize(Math.min(0.2, 0.2 / (max + 0.15)));
    }
  }, [displayValue,max]);

  return (
    <>
      <Text
        ref={calculatorRef2}
        fontSize={size}
        font="/fonts/neue-regrade-medium.otf"
        position={[-0.47, 0.6, 0.06]}
        anchorX={"left"}
      >
        {displayValue}
      </Text>
      <Text
        fontSize={0.2}
        ref={calculatorRef}
        font="/fonts/neue-regrade-medium.otf"
        position={[-0.47, 0.6, 1]}
        anchorX={"left"}
        fillOpacity={0}
      >
        {displayValue}
      </Text>
    </>
  );
}

export default CalculatorDisplay;
