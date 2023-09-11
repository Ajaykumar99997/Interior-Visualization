import React, { useState } from 'react';
import { useGLTF, useTexture, useCursor } from '@react-three/drei';
import * as THREE from 'three';

const CoffeeTable = (props) => {
  const { nodes, materials } = useGLTF('../models/coffeeTable.glb');
  const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);

  const steel = useTexture({
    map: '../textures/metal/steel/MetalSteelBrushed001_COL_1K_METALNESS.png',
    metalnessMap:
      '../textures/metal/steel/MetalSteelBrushed001_METALNESS_1K_METALNESS.png',
    normalMap:
      '../textures/metal/steel/MetalSteelBrushed001_NRM_1K_METALNESS.png',
    roughnessMap:
      '../textures/metal/steel/MetalSteelBrushed001_ROUGHNESS_1K_METALNESS.png',
  });

  const gold = useTexture({
    map: '../textures/metal/gold/MetalGoldPaint002_COL_1K_METALNESS.png',
    metalnessMap:
      '../textures/metal/gold/MetalGoldPaint002_METALNESS_1K_METALNESS.png',
    normalMap: '../textures/metal/gold/MetalGoldPaint002_NRM_1K_METALNESS.png',
    roughnessMap:
      '../textures/metal/gold/MetalGoldPaint002_ROUGHNESS_1K_METALNESS.png',
  });

  const wood = useTexture({
    map: '../textures/metal/wood/wood_table_001_diff_1k.jpg',
    normalMap: '../textures/metal/wood/wood_table_001_nor_dx_1k.jpg',
    roughnessMap: '../textures/metal/wood/wood_table_001_arm_1k.jpg',
    aoMap: '../textures/metal/wood/wood_table_001_arm_1k.jpg',
  });

  const [currentTexture, setCurrentTexture] = useState(steel);
  const [hasFocus, setFocus] = useState(false);
  const [hovered, hover] = useState(null);
  useCursor(hovered);

  const meshProps = {
    scale: [0.1, 0.1, 0.1],
    onPointerOver: () => {
      if (hasFocus) {
        hover(true);
      }
    },
    onPointerOut: () => {
      hover(false);
    },
    visible: hasFocus ? true : false,
    geometry: sphereGeometry,
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        {...meshProps}
        position={[-0.2, 0.1, -0.2]}
        onClick={(ev) => {
          if (hasFocus) {
            setCurrentTexture(wood);
            ev.stopPropagation();
          }
        }}
      >
        <meshStandardMaterial {...wood} />
      </mesh>
      <mesh
        {...meshProps}
        position={[0.2, 0.1, -0.2]}
        onClick={(ev) => {
          if (hasFocus) {
            setCurrentTexture(steel);
            ev.stopPropagation();
          }
        }}
      >
        <meshStandardMaterial {...steel} />
      </mesh>
      <mesh
        {...meshProps}
        position={[0.6, 0.1, -0.2]}
        onClick={(ev) => {
          if (hasFocus) {
            setCurrentTexture(gold);
            ev.stopPropagation();
          }
        }}
      >
        <meshStandardMaterial {...gold} />
      </mesh>

      <mesh
        onClick={(event) => (setFocus(true), event.stopPropagation())}
        onPointerMissed={() => setFocus(false)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        castShadow
        receiveShadow
        geometry={nodes.Mesh003.geometry}
        position={[0, 0, -0.833]}
      >
        <meshStandardMaterial {...currentTexture} />
      </mesh>
    </group>
  );
};

useGLTF.preload('../models/coffeeTable.glb');

export default CoffeeTable;
