import { useEffect } from "react";
import { Float } from "@react-three/drei";
import { CalculatorModel } from "./CalculatorModel";
import {motion} from "framer-motion-3d"
import { useMotionValue, useSpring } from "framer-motion";
import { Suspense } from "react";

const config = { damping: 20 };

function Calculator({ mouse }) {
  
  return (
    <Float floatIntensity={0.2}>
      <motion.group
        initial={{ scale: 0 }}
        animate={{ scale: 1}}
        transition={{delay: 1.5, duration :1.2, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        rotation-y={mouse.y}
        rotation-x={mouse.x}
      >
        <CalculatorModel scale={0.3}></CalculatorModel>
      </motion.group>
    </Float>
  );
}

export default Calculator;
