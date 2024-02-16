import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Calculator from "./Calculator";
function Content() {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="h-80 w-80 absolute rounded-full z-10 bg-[#161616]"></div>
      <div className="z-20 w-full h-full">
        <Canvas camera={{ fov: 10}}>
          <PerspectiveCamera makeDefault fov={10} position={[0,0,5]} ></PerspectiveCamera>
          <spotLight
            position={[1, 1, 2]}
            intensity={12}
            angle={0.5}
          ></spotLight>
          <pointLight color={"#8d8d8d"} position={[-0.5,-0.5,-1]} intensity={10} ></pointLight>
          <pointLight color={"#b19188"} position={[-3,-1.5,1]} intensity={10} ></pointLight>
          <pointLight color={"#f3b563"} position={[-0.5,1.5,0.5]} intensity={10} ></pointLight>
          <pointLight color={"#f3a963"} position={[0.5,-1,0.5]} intensity={2} ></pointLight>
          <Calculator></Calculator>
          <OrbitControls enablePan={false} enableZoom={false}></OrbitControls>
          
          {/* <mesh scale={0.4} >
            <boxGeometry></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh> */}
        </Canvas>
      </div>
    </section>
  );
}

export default Content;
