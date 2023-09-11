import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import { PerspectiveCamera, Loader } from '@react-three/drei';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Canvas linear={true}>
        <PerspectiveCamera makeDefault fov={30} position={[3.5, 1.8, 1.5]} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
