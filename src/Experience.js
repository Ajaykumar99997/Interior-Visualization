import { Environment, OrbitControls, useEnvironment } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Perf } from 'r3f-perf';

import Sofa from './components/Sofa.js';
import Room from './components/Room.js';
import CoffeeTable from './components/CoffeeTable.js';

export default function Experience() {
  const controls = useRef();
  const forward = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    state.camera.getWorldDirection(forward);
    controls.current.target.copy(state.camera.position).add(forward);
  });

  return (
    <>
      <OrbitControls
        target={[0, 1, -1]}
        ref={controls}
        rotateSpeed={-0.1}
        enableZoom={false}
        enablePan={false}
      />
      <ambientLight intensity={3} />
      <Environment
        files="./hilly_terrain_01_1k.hdr"
        intensity={0.5}
        background
      />
      <Room />
      <Sofa position={[0, 0, -3.2]} />
      <CoffeeTable position={[0, 0, 0.2]} />
    </>
  );
}
