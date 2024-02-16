import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import Calculator from "./Calculator";
function Scene({mouse}) {
  return (
    <div className="z-20 w-full h-full">
        <Canvas camera={{ fov: 10}}>
          <PerspectiveCamera makeDefault rotation={[1,0.4,50]} fov={10} position={[0,0,5]} ></PerspectiveCamera>
          <spotLight
            position={[1, 1, 2]}
            intensity={12}
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