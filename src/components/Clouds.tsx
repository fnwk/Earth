import { fragmentShader, vertexShader } from "@/lib/cloudsShader";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Clouds = () => {
  const cloudsTexture = useLoader(TextureLoader, "/clouds.jpg");

  const uniforms = {
    cloudsTexture: { value: cloudsTexture },
  };

  return (
    <mesh>
      <sphereGeometry args={[2.55, 1000, 1000]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default Clouds;
