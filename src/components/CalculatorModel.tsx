/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\calculator_export.glb -t -s -K 
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Button from "./Button";
import { useAtomValue } from "jotai";
import { display } from "../store/calculation";


type GLTFResult = GLTF & {
  nodes: {
    body_1: THREE.Mesh;
    body_2: THREE.Mesh;
    body_3: THREE.Mesh;
    button_0: THREE.Mesh;
    button_0_1: THREE.Mesh;
    button_1: THREE.Mesh;
    button_1_1: THREE.Mesh;
    button_2: THREE.Mesh;
    button_2_1: THREE.Mesh;
    button_3: THREE.Mesh;
    button_3_1: THREE.Mesh;
    button_4: THREE.Mesh;
    button_4_1: THREE.Mesh;
    button_5: THREE.Mesh;
    button_5_1: THREE.Mesh;
    button_6: THREE.Mesh;
    button_6_1: THREE.Mesh;
    button_7: THREE.Mesh;
    button_7_1: THREE.Mesh;
    button_8: THREE.Mesh;
    button_8_1: THREE.Mesh;
    button_9: THREE.Mesh;
    button_9_1: THREE.Mesh;
    button_ac: THREE.Mesh;
    button_ac_1: THREE.Mesh;
    button_add: THREE.Mesh;
    button_add_1: THREE.Mesh;
    button_decimal: THREE.Mesh;
    button_decimal_1: THREE.Mesh;
    button_delete: THREE.Mesh;
    button_delete_1: THREE.Mesh;
    button_divide: THREE.Mesh;
    button_divide_1: THREE.Mesh;
    button_equal: THREE.Mesh;
    button_equal_1: THREE.Mesh;
    button_multiply: THREE.Mesh;
    button_multiply_1: THREE.Mesh;
    button_power: THREE.Mesh;
    button_power_1: THREE.Mesh;
    button_subtract: THREE.Mesh;
    button_subtract_1: THREE.Mesh;
  };
  materials: {
    white: THREE.MeshStandardMaterial;
    display: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    ["black.001"]: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function CalculatorModel(props: JSX.IntrinsicElements["group"]) {
  const displayValue = useAtomValue(display)
  const { nodes, materials } = useGLTF("/calculator_export.glb") as GLTFResult;
  function handleChange(func){
    setEquation(prev => prev + func)
  }
  return (
    <group  {...props} dispose={null}>
      <pointLight
        color={"#8d8d8d"}
        position={[-0.5, -0.5, -1]}
        intensity={1}
      ></pointLight>
      <pointLight
        color={"#b19188"}
        position={[-2, -2, 1]}
        intensity={1}
      ></pointLight>
      <pointLight
        color={"#f3b563"}
        position={[-2, 1.5, 1]}
        intensity={0.2}
      ></pointLight>
      <pointLight
        color={"#e9b897"}
        position={[0, -1, 1]}
        intensity={1}
      ></pointLight>
      <group>
        <group>
          <Text fontSize={0.2} font="/fonts/neue-regrade-medium.otf" position={[-0.47,0.6,0.06]} anchorX={"left"} >{displayValue}</Text>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_2.geometry}
            material={materials.display}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_3.geometry}
            material={materials.black}
          />
          {/* <motion.group whileTap={{z:-0.01}} >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_0.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_0_1.geometry}
              material={materials.black}
            />
          </motion.group> */}
          <Button nodes={nodes} op={"0"} materials={materials} >0</Button>
          <Button nodes={nodes} op={"1"} materials={materials} >1</Button>
          <Button nodes={nodes} op={"2"} materials={materials} >2</Button>
          <Button nodes={nodes} op={"3"} materials={materials} >3</Button>
          <Button nodes={nodes} op={"4"} materials={materials} >4</Button>
          <Button nodes={nodes} op={"5"} materials={materials} >5</Button>
          <Button nodes={nodes} op={"6"} materials={materials} >6</Button>
          <Button nodes={nodes} op={"7"} materials={materials} >7</Button>
          <Button nodes={nodes} op={"8"} materials={materials} >8</Button>
          <Button nodes={nodes} op={"9"} materials={materials} >9</Button>
          <Button nodes={nodes} op={"clear"} materials={materials} func={"clear"} >ac</Button>
          <Button nodes={nodes} op={"."} materials={materials} >decimal</Button>
          <Button nodes={nodes} op={"delete"} materials={materials}  func={"delete"} >delete</Button>
          <Button nodes={nodes} op={"/"} materials={materials} >divide</Button>
          <Button nodes={nodes} op={"equal"} materials={materials} func={"equal"} >equal</Button>
          <Button nodes={nodes} op={"*"} materials={materials} >multiply</Button>
          <Button nodes={nodes} op={"^"} materials={materials} >power</Button>
          <Button nodes={nodes} op={"-"} materials={materials} >subtract</Button>
          <Button nodes={nodes} op={"+"} materials={materials} >add</Button>
          
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/calculator_export.glb");
