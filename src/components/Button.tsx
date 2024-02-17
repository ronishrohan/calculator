import React, { useState } from "react";
import { motion } from "framer-motion-3d";
import { MeshStandardMaterial, MeshToonMaterial } from "three";
import sound1 from "/audio/1.wav";
import sound2 from "/audio/2.wav";
import sound3 from "/audio/3.wav";
import sound4 from "/audio/4.wav";
import useSound from "use-sound";
import { useAtom } from "jotai";
import { display } from "../store/calculation";

interface ButtonProps{
  materials: unknown,
  nodes: unknown,
  children: string,
  op: string,
  func?: string

}

const operators = [".", "+", "-", "^", "*", "/"];

const hovered = new MeshStandardMaterial({ color: "#7e7e7e" });
const hovered_orange = new MeshStandardMaterial({ color: "#704136" });

function Button({ materials, nodes, children, op, func } :ButtonProps) {
  const [displayValue, setDisplayValue] = useAtom(display);
  const material = children == "add" ? materials["black.001"] : materials.white;
  const material_hovered = children == "add" ? hovered_orange : hovered;

  const audioConfig = {
    volume: 0.7,
    playbackRate: 1,
  };

  const [playSound1] = useSound(sound1, audioConfig);
  const [playSound2] = useSound(sound2, audioConfig);
  const [playSound3] = useSound(sound3, audioConfig);
  const [playSound4] = useSound(sound4, audioConfig);

  const [isHovered, setHovered] = useState(false);

  function playSound() {
    const rand = Math.random() * 4;
    if (rand <= 1) {
      playSound1();
    } else if (rand <= 2) {
      playSound2();
    } else if (rand <= 3) {
      playSound3();
    } else {
      playSound4();
    }
  }

  function formatCalc(display: string) {
    const res = display.replace("^", "**");
    return res;
  }

  function handleClick() {
    playSound();
    switch (op) {
      case "clear":
        setDisplayValue("");
        break;
      case "delete":
        setDisplayValue((prev) => prev.substring(0, prev.length - 1));
        break;
      case "equal":
        let res = "";
        try {
          res = eval(formatCalc(displayValue)).toString();
        } catch {
          res = "error"
        }
        setDisplayValue((prev) => res);
        break;
      case "+":
      case "-":
      case "^":
      case "*":
      case "/":
        if (!operators.includes(displayValue.charAt(displayValue.length - 1)) && displayValue.length != 0) {
          setDisplayValue((prev) => prev + op);
        }
        break;
      case ".":
        if(displayValue.indexOf(".") == -1){
          setDisplayValue(prev => prev + ".")
        }
        break;
      default:
        setDisplayValue((prev) => prev + op);
    }
  }
  return (
    <motion.group
      position={[0, 0, 0.01]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      whileTap={{ z: -0.01 }}
    >
      <mesh
        castShadow
        receiveShadow
        onClick={() => handleClick()}
        geometry={nodes[`button_${children}`].geometry}
        material={
          children == 4
            ? materials.black
            : isHovered
            ? material_hovered
            : material
        }
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes[`button_${children}_1`].geometry}
        material={
          children == 4
            ? isHovered
              ? material_hovered
              : materials.white
            : materials.black
        }
      />
    </motion.group>
  );
}

export default Button;
