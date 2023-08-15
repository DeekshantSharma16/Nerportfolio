import React, { Suspense, useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  color: transparent; /* Initially transparent text color */

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  animation: fadeInUp 1.5s ease forwards;
  transition: color 0.5s; /* Smooth color transition */

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 50px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px 0;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #3d1c22;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #481f26;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    margin-top: 30px;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Think. Make. Solve.";
  const typingDelay = 100; // Adjust this value for typing speed
  const typingIntervalValue = 100; // Adjust this value for interval between typed characters

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prevText) => prevText + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingIntervalValue);

    setTimeout(() => {
      clearInterval(typingInterval);
    }, typingDelay + fullText.length * typingIntervalValue);

    return () => {
      // Remove the cleanup function to ensure animation completes
    };
  }, []);

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title style={{ color: typedText ? "#3d1c22" : "transparent" }}>
            {fullText}
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" alt="Line" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 300]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c22"
                  attach="material"
                  distort={0.5}
                  speed={4}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/progr.svg" alt="Moon" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
