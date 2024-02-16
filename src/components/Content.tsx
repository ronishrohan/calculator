import {Canvas} from "@react-three/fiber"
import { OrbitControls, OrthographicCamera } from "@react-three/drei"
function Content() {
  return (
    <section className="h-full w-full flex justify-center items-center" >
      <div className="h-80 w-80 absolute rounded-full z-10 bg-[#161616]" ></div>
      <div className="z-20 w-80 h-80" >
        <Canvas camera={{fov: 10}} >
          <directionalLight position={[1,1,2]} ></directionalLight>
          <ambientLight intensity={0.4} ></ambientLight>
          <OrbitControls enablePan={false} enableZoom={false}></OrbitControls>
          <mesh scale={0.4} >
            <boxGeometry></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh>
        </Canvas>
      </div>
    </section>
  )
}

export default Content