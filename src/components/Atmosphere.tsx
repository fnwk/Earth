import { fragmentShader, vertexShader } from "@/lib/atmosphereShader";
import { BackSide } from "three";

const Atmosphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[3, 100]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={BackSide}
      />
    </mesh>
  );
};

export default Atmosphere;
