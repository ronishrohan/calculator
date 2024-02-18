import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import Calculator from "./Calculator";
import { mode } from "../store/cursor";
import { useAtomValue } from "jotai";
function Scene({mouse}) {
  const cursor_mode = useAtomValue(mode)
  return (
    <div className={`z-20 w-full h-full pointer-events-none absolute cursor-${cursor_mode}`}>
        <Canvas camera={{ fov: 10}}>
          <PerspectiveCamera makeDefault rotation={[1,0.4,50]} fov={10} position={[0,0,5]} ></PerspectiveCamera>
          <spotLight
            position={[1, 1, 2]}
            intensity={9}
            angle={0.5}
          ></spotLight>
          
          <Calculator mouse={mouse} ></Calculator>
          <OrbitControls enablePan={false} enableZoom={false} enabled={false}></OrbitControls>
          
          {/* <mesh scale={0.4} >
            <boxGeometry></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh> */}
        </Canvas>
      </div>
  )
}

export default Scene