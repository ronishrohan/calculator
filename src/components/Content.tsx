import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import Calculator from "./Calculator";
function Content() {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="h-80 w-80 absolute rounded-full z-10 bg-[#161616]"></div>
      <div className="z-20 w-full h-full">
        <Canvas camera={{ fov: 20 }}>
          <spotLight
            position={[1, 1, 2]}
            intensity={10}
            angle={0.5}
          ></spotLight>
          <directionalLight
            position={[1, 1, 2]}
            intensity={2}
          ></directionalLight>
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
