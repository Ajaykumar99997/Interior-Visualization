import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useGLTF, useTexture, useCursor } from '@react-three/drei';

const Sofa = (props) => {
  const { nodes, materials } = useGLTF('../models/sofa01.glb');
  const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);

  const couchGreen = useTexture({
    map: '../textures/fabric/green/book_pattern_col1_1k.jpg',
    aoMap: '../textures/fabric/green/book_pattern_arm_1k.jpg',
    roughnessMap: '../textures/fabric/green/book_pattern_arm_1k.jpg',
    normalMap: '../textures/fabric/green/book_pattern_nor_gl_1k.jpg',
  });

  couchGreen.map.repeat.set(5, 5);
  couchGreen.aoMap.repeat.set(5, 5);
  couchGreen.roughnessMap.repeat.set(5, 5);

  couchGreen.normalMap.repeat.set(5, 5);

  couchGreen.map.wrapS =
    couchGreen.map.wrapT =
    couchGreen.aoMap.wrapS =
    couchGreen.aoMap.wrapT =
    couchGreen.roughnessMap.wrapS =
    couchGreen.roughnessMap.wrapT =
    couchGreen.normalMap.wrapS =
    couchGreen.normalMap.wrapT =
      THREE.RepeatWrapping;

  const couchRed = useTexture({
    map: '../textures/fabric/red/leather_red_03_coll1_1k.jpg',
    aoMap: '../textures/fabric/red/leather_red_03_arm_1k.jpg',
    roughnessMap: '../textures/fabric/red/leather_red_03_arm_1k.jpg',
    normalMap: '../textures/fabric/red/leather_red_03_nor_gl_1k.jpg',
  });

  couchRed.map.repeat.set(5, 5);
  couchRed.aoMap.repeat.set(5, 5);
  couchRed.roughnessMap.repeat.set(5, 5);
  couchRed.normalMap.repeat.set(5, 5);

  couchRed.map.wrapS =
    couchRed.map.wrapT =
    couchRed.aoMap.wrapS =
    couchRed.aoMap.wrapT =
    couchRed.roughnessMap.wrapS =
    couchRed.roughnessMap.wrapT =
    couchRed.normalMap.wrapS =
    couchRed.normalMap.wrapT =
      THREE.RepeatWrapping;

  const couchWhite = useTexture({
    map: '../textures/fabric/white/leather_white_diff_1k.jpg',
    aoMap: '../textures/fabric/white/leather_white_arm_1k.jpg',
    roughnessMap: '../textures/fabric/white/leather_white_arm_1k.jpg',
    normalMap: '../textures/fabric/white/leather_white_nor_gl_1k.jpg',
  });

  couchWhite.map.repeat.set(5, 5);
  couchWhite.aoMap.repeat.set(5, 5);
  couchWhite.roughnessMap.repeat.set(5, 5);
  couchWhite.normalMap.repeat.set(4, 5);

  couchWhite.map.wrapS =
    couchWhite.map.wrapT =
    couchWhite.aoMap.wrapS =
    couchWhite.aoMap.wrapT =
    couchWhite.roughnessMap.wrapS =
    couchWhite.roughnessMap.wrapT =
    couchWhite.normalMap.wrapS =
    couchWhite.normalMap.wrapT =
      THREE.RepeatWrapping;

  const [currentTexture, setCurrentTexture] = useState(couchGreen);
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
        geometry={sphereGeometry}
        {...meshProps}
        position={[1.5, 0.1, 2.2]}
        onClick={(ev) => {
          if (hasFocus) {
            setCurrentTexture(couchRed);
            ev.stopPropagation();
          }
        }}
      >
        <meshStandardMaterial {...couchRed} />
      </mesh>
      <mesh
        {...meshProps}
        position={[1.1, 0.1, 2.2]}
        onClick={(ev) => {
          if (hasFocus) {
            setCurrentTexture(couchGreen);
            ev.stopPropagation();
          }
        }}
      >
        <meshStandardMaterial {...couchGreen} />
      </mesh>
      <mesh
        {...meshProps}
        position={[0.7, 0.1, 2.2]}
        onClick={(ev) => {
          if (hasFocus) {
            setCurrentTexture(couchWhite);
            ev.stopPropagation();
          }
        }}
      >
        <meshStandardMaterial {...couchWhite} />
      </mesh>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.014}>
        <group scale={100}>
          <mesh
            onClick={(event) => (setFocus(true), event.stopPropagation())}
            onPointerMissed={() => setFocus(false)}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            geometry={nodes.Base.geometry}
            scale={0.852}
          >
            <meshStandardMaterial {...currentTexture} />
          </mesh>
          <mesh geometry={nodes.Cushion_Left.geometry} scale={0.852}>
            <meshStandardMaterial {...currentTexture} />
          </mesh>
          <mesh geometry={nodes.Cushion_Right.geometry} scale={0.852}>
            <meshStandardMaterial {...currentTexture} />
          </mesh>
          <mesh geometry={nodes.Left_Arm_Rest.geometry} scale={0.852}>
            <meshStandardMaterial {...currentTexture} />
          </mesh>
          <mesh
            geometry={nodes.Left_Leg.geometry}
            material={materials['Material.003']}
            scale={0.852}
          />
          <mesh geometry={nodes.Right_Arm_Rest.geometry} scale={0.852}>
            <meshStandardMaterial {...currentTexture} />
          </mesh>
          <mesh
            geometry={nodes.Right_Leg.geometry}
            material={materials['Material.003']}
            scale={0.852}
          />
          <mesh geometry={nodes.Seat_Left.geometry} scale={0.852}>
            <meshStandardMaterial {...currentTexture} />
          </mesh>
          <mesh
            geometry={nodes.Seat_Right.geometry}
            position={[0.331, -1.049, 0.22]}
            scale={0.852}
          >
            <meshStandardMaterial {...currentTexture} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('../models/sofa01.glb');

export default Sofa;
