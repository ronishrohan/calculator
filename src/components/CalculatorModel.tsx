/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\calculator_export.glb -t -s -K 
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { motion } from "framer-motion-3d";
import { useMotionValue } from "framer-motion";

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
  
  const { nodes, materials } = useGLTF("/calculator_export.glb") as GLTFResult;
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
          <Text fontSize={0.2} font="/fonts/neue-regrade-medium.otf" position={[-0.45,0.6,0.06]} anchorX={"left"} >://</Text>
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
          <group>
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
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_1.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_1_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_2.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_2_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_3.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_3_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_4.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_4_1.geometry}
              material={materials.white}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_5.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_5_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_6.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_6_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_7.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_7_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_8.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_8_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_9.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_9_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_ac.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_ac_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_add.geometry}
              material={materials["black.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_add_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_decimal.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_decimal_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_delete.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_delete_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_divide.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_divide_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_equal.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_equal_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_multiply.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_multiply_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_power.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_power_1.geometry}
              material={materials.black}
            />
          </group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_subtract.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.button_subtract_1.geometry}
              material={materials.black}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/calculator_export.glb");
