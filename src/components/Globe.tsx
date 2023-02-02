import { fragmentShader, vertexShader } from "@/lib/globeShader";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, Mesh } from "three";
import { useRef, useEffect } from "react";

const Globe = () => {
  const globe = useRef<Mesh>(null!);

  const globeTexture = useLoader(TextureLoader, "/worldmap.jpg");
  const cloudsTexture = useLoader(TextureLoader, "/clouds.jpg");
  const lightsTexture = useLoader(TextureLoader, "/lights.jpg");

  const uniforms = {
    globeTexture: { value: globeTexture },
    cloudsTexture: { value: cloudsTexture },
    lightsTexture: { value: lightsTexture },
  };

  useFrame(() => {
    globe.current.rotation.y -= 0.0005;
  });

  useEffect(() => {
    console.log(globe.current);
  }, []);

  return (
    <mesh ref={globe} rotation={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 1000, 1000]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Globe;
