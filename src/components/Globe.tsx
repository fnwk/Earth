import { fragmentShader, vertexShader } from "@/lib/globeShader";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, Mesh } from "three";
import { useRef, useEffect } from "react";

const Globe = () => {
  const globe = useRef<Mesh>(null!);

  const globeTexture = useLoader(TextureLoader, "/worldmap.jpg");
  const displacementMap = useLoader(TextureLoader, "/heightmap.png");
  const normalMap = useLoader(TextureLoader, "/NormalMap.png");

  const uniforms = {
    globeTexture: { value: globeTexture },
    displacementMap: { value: displacementMap },
    normalMap: { value: normalMap },
  };

  useFrame(() => {
    // globe.current.rotation.y += 0.005;
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
