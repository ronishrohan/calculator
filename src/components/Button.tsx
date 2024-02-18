/* eslint-disable no-case-declarations */
import React, { useState } from "react";
import { motion } from "framer-motion-3d";
import { MeshStandardMaterial, MeshToonMaterial } from "three";
import sound1 from "/audio/1.wav";
import sound2 from "/audio/2.wav";
import sound3 from "/audio/3.wav";
import sound4 from "/audio/4.wav";
import useSound from "use-sound";
import { useAtom, useSetAtom } from "jotai";
import { display } from "../store/calculation";
import { useMotionValue, useSpring } from "framer-motion";
import { results } from "../store/calculation";
import { calcs } from "../store/calculation";
import { mode } from "../store/cursor";
import { Edges } from "@react-three/drei";
const initZ = 0.02;

interface ButtonProps {
  materials: any;
  nodes: any;
  children: string;
  op: string;
  func?: string;
}

const operators = [".", "+", "-", "^", "*", "/"];

const hovered = new MeshStandardMaterial({ color: "#7e7e7e" });
const hovered_orange = new MeshStandardMaterial({ color: "#704136" });

function Button({ materials, nodes, children, op, func }: ButtonProps) {
  const changeMode = useSetAtom(mode);
  const updateCals = useSetAtom(calcs);
  const updateResults = useSetAtom(results);
  const [displayValue, setDisplayValue] = useAtom(display);
  const material = children == "add" ? materials["black.001"] : materials.white;
  const material_hovered = children == "add" ? hovered_orange : hovered;

  const zPos = useSpring(useMotionValue(initZ), {
    stiffness: 500,
    damping: 20,
  });

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
    if (displayValue == "error") {
      setDisplayValue("");
    }

    if (op == "clear") {
      setDisplayValue("");
    } else if (op == "delete") {
      setDisplayValue((prev) => prev.substring(0, prev.length - 1));
    } 
    else if(op == "+" || op == "-"){
      if(displayValue.charAt(displayValue.length -1) != "-" && displayValue.charAt(displayValue.length -1) != "+"){
        setDisplayValue(prev => prev + op)
      }
    }
    else {
      switch (op) {
        case "equal":
          let res = "";
          try {
            res = eval(formatCalc(displayValue)).toString();
          } catch {
            res = "error";
          }

          setDisplayValue((prev) => res);
          updateResults((prev) => [...prev, res]);
          updateCals((prev) => [...prev, displayValue]);
          break;
        case "^":
        case "*":
        case "/":
          if (
            !operators.includes(displayValue.charAt(displayValue.length - 1)) &&
            displayValue.length != 0
          ) {
            setDisplayValue((prev) => prev + op);
          }
          break;
        case ".":
          if (displayValue.indexOf(".") == -1) {
            setDisplayValue((prev) => prev + ".");
          }
          break;
        default:
          setDisplayValue((prev) => prev + op);
      }
    }
  }
  return (
    <motion.group
      onPointerEnter={() => {
        setHovered(true);
        changeMode("pointer");
      }}
      onPointerLeave={() => {
        setHovered(false);
        changeMode("default");
      }}
      position-z={zPos}
      onPointerDown={() => {
        playSound();
        zPos.set(-0.01);
      }}
      onPointerUp={() => zPos.set(initZ)}
      onPointerOut={() => zPos.set(initZ)}
    >
      <mesh
        castShadow
        receiveShadow
        onClick={() => {
          if (children != "4") {
            handleClick();
          }
        }}
        geometry={nodes[`button_${children}`].geometry}
        material={
          children == "4"
            ? materials.black
            : isHovered
            ? material_hovered
            : material
        }
      >
        {op != "4" && isHovered && (
          <Edges scale={1} position={[0, 0, 0.04]} color={"#242424"}></Edges>
        )}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        onClick={() => {
          if (children == "4") {
            handleClick();
          }
        }}
        geometry={nodes[`button_${children}_1`].geometry}
        material={
          children == "4"
            ? isHovered
              ? material_hovered
              : materials.white
            : materials.black
        }
      >
        {op == "4" && isHovered && (
          <Edges scale={1} position={[0, 0, 0.04]} color={"#242424"}></Edges>
        )}
      </mesh>
    </motion.group>
  );
}

export default Button;
