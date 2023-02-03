import Globe from "@/components/Globe/Index";
import Info from "@/components/Info/Index";
import theme from "@/styles/theme";

import { Suspense } from "react";
import Head from "next/head";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Planet Earth</title>
        <meta
          name="description"
          content="Realistic earth model website built with react-three-fiber"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Canvas shadows className="three-canvas">
          <Globe />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
    </>
  );
}

const Loading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
