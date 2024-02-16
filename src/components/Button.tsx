import React, { useState } from "react";
import { motion } from "framer-motion-3d";
import { MeshStandardMaterial, MeshToonMaterial } from "three";

const hovered = new MeshStandardMaterial({color: "#878787"})

function Button({ materials, nodes, children, changeEquation, op }) {
  
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.group
      position={[0, 0, 0.01]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => {
        changeEquation(op)
      }}
      whileTap={{z:-0.01}}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[`button_${children}`].geometry}
        material={children == 4 ? materials.black : (isHovered ? hovered: materials.white)}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes[`button_${children}_1`].geometry}
        material={children == 4 ? (isHovered ? hovered: materials.white) : materials.black}
      />
    </motion.group>
  );
}

export default Button;
