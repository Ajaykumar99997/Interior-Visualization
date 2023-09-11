import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Room = (props) => {
  const { nodes, materials } = useGLTF('../models/newRoom01.glb');
  const vec = new THREE.Vector3();
  const targetPosition = useRef(null);
  const grabProps = {
    onPointerUp: () => {
      document.body.style.cursor = 'grab';
    },
    onPointerDown: () => {
      document.body.style.cursor = 'grabbing';
    },
  };

  const FloorClickHandler = (event) => {
    // Get the clicked position on the floor
    const clickedPosition = event.point;

    // Store the target position
    targetPosition.current = clickedPosition;
  };

  useFrame((state, delta) => {
    if (!targetPosition.current) return;

    state.camera.position.lerp(
      vec.set(
        targetPosition.current.x,
        state.camera.position.y,
        targetPosition.current.z
      ),
      4 * delta
    );
    state.camera.updateProjectionMatrix();
  });

  return (
    <group {...props} dispose={null}>
      <group position={[1.685, 0, -1.999]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.POT_WOOD_LEGS_WOODEN_LEGS_POT_0.geometry}
            material={materials.WOODEN_LEGS_POT}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.POTHOS_POTHOS_Mat_0.geometry}
            material={materials.POTHOS_Mat}
            position={[0.528, 48.985, 2.882]}
            scale={51.957}
          />
        </group>
      </group>
      <group
        position={[-3.616, 0.572, -0.863]}
        rotation={[-Math.PI / 2, 0, 1.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling.geometry}
        material={materials['Material.002']}
        position={[0, 0, -0.039]}
        scale={[4, 1.3, 2.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VenetianFrame.geometry}
        material={nodes.VenetianFrame.material}
        position={[-1.045, 2.496, 2.433]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_slats.geometry}
          material={materials['Plastic_venetian_material.254']}
          position={[0, -0.08, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringbL.geometry}
            material={materials.String_material}
            position={[0.772, 0, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringbR.geometry}
            material={materials.String_material}
            position={[-0.772, 0, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringC.geometry}
            material={materials.String_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringfL.geometry}
            material={materials.String_material}
            position={[0.772, 0, 0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringfR.geometry}
            material={materials.String_material}
            position={[-0.772, 0, 0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringL.geometry}
            material={materials.String_material}
            position={[0.772, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringR.geometry}
            material={materials.String_material}
            position={[-0.772, 0, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_stick.geometry}
          material={nodes.Venetian_stick.material}
          position={[-0.89, -0.03, 0.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_updown.geometry}
          material={materials.String_material}
          position={[0.89, -0.03, 0.023]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VenetianFrame001.geometry}
        material={nodes.VenetianFrame001.material}
        position={[-2.946, 2.496, 2.433]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_slats001.geometry}
          material={materials['Plastic_venetian_material.254']}
          position={[0, -0.08, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_stick001.geometry}
          material={nodes.Venetian_stick001.material}
          position={[-0.89, -0.03, 0.023]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VenetianFrame002.geometry}
        material={nodes.VenetianFrame002.material}
        position={[0.922, 2.496, 2.433]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_slats002.geometry}
          material={materials['Plastic_venetian_material.254']}
          position={[0, -0.08, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_stick002.geometry}
          material={nodes.Venetian_stick002.material}
          position={[-0.89, -0.03, 0.023]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VenetianFrame003.geometry}
        material={nodes.VenetianFrame003.material}
        position={[2.922, 2.496, 2.433]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_slats003.geometry}
          material={materials['Plastic_venetian_material.259']}
          position={[0, -0.08, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringbC001.geometry}
            material={materials.String_material}
            position={[0, 0, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringbL001.geometry}
            material={materials.String_material}
            position={[0.877, 0, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringbR001.geometry}
            material={materials.String_material}
            position={[-0.877, 0, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringC001.geometry}
            material={materials.String_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringfC001.geometry}
            material={materials.String_material}
            position={[0, 0, 0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringfL001.geometry}
            material={materials.String_material}
            position={[0.877, 0, 0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringfR001.geometry}
            material={materials.String_material}
            position={[-0.877, 0, 0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringL001.geometry}
            material={materials.String_material}
            position={[0.877, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.StringR001.geometry}
            material={materials.String_material}
            position={[-0.877, 0, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_stick003.geometry}
          material={nodes.Venetian_stick003.material}
          position={[-0.995, -0.03, 0.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Venetian_updown001.geometry}
          material={materials.String_material}
          position={[0.995, -0.03, 0.023]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.side_table_01}
        position={[-1.72, 0, -2.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane118.geometry}
        material={materials.PottedPlant_04}
        position={[-1.721, 0.549, -2.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChairSoborg_Base.geometry}
        material={materials.ChairSoborg_Oak}
        position={[-3.685, 0, -0.251]}
        rotation={[0.16, 1.571, 0]}
        scale={0.195}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChairSoborg_Back.geometry}
          material={materials.ChairSoborg_Oak}
          position={[-0.708, 3.544, -0.895]}
          rotation={[-0.259, 0.041, -0.154]}
        />
        <group
          position={[-1.356, 3.873, -0.96]}
          rotation={[1.313, -0.106, -0.397]}
          scale={0.035}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials.ChairSoborg_AllenScrew}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials.ChairSoborg_AllenScrewHole}
          />
        </group>
        <group
          position={[-1.538, 3.304, -0.757]}
          rotation={[1.319, -0.109, -0.433]}
          scale={0.035}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_2.geometry}
            material={materials.ChairSoborg_AllenScrew}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_3.geometry}
            material={materials.ChairSoborg_AllenScrewHole}
          />
        </group>
        <group
          position={[-1.769, 2.627, -0.067]}
          rotation={[-0.052, 0.012, -0.357]}
          scale={0.035}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_4.geometry}
            material={materials.ChairSoborg_AllenScrew}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_5.geometry}
            material={materials.ChairSoborg_AllenScrewHole}
          />
        </group>
        <group
          position={[-1.765, 2.675, 0.797]}
          rotation={[-0.056, 0.013, -0.362]}
          scale={0.035}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_6.geometry}
            material={materials.ChairSoborg_AllenScrew}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_7.geometry}
            material={materials.ChairSoborg_AllenScrewHole}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChairSoborg_Seat.geometry}
          material={materials.ChairSoborg_Oak}
          position={[-0.876, 2.496, 0.3]}
          rotation={[0, 0, -0.16]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChairSoborg_Slat1.geometry}
          material={materials.ChairSoborg_Oak}
          position={[-0.984, 1.827, 0.924]}
          rotation={[-0.058, 0.009, -0.159]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChairSoborg_Slat2.geometry}
          material={materials.ChairSoborg_Oak}
          position={[-0.997, 1.75, -0.955]}
          rotation={[0.093, -0.015, -0.159]}
        />
      </mesh>
      <mesh
        onDoubleClick={FloorClickHandler}
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Material}
        position={[0, 0, -0.039]}
        scale={[4, 1.3, 2.5]}
      />
      <group position={[0, 0, -0.039]} scale={[4, 1.3, 2.5]}>
        <mesh
          {...grabProps}
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          {...grabProps}
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.side_table_01}
        position={[-3.645, 0, -0.818]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2001.geometry}
        material={materials.Grasshoppa_lamp}
        position={[-3.662, 0, -1.846]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.013}
      />
      <group position={[-2.569, 1.682, -2.385]} scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shelf_Wall_1_Bookshelf_Material_0.geometry}
          material={materials.Bookshelf_Material}
          position={[-1.148, -4.954, 0.144]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shelf_Wall_1_WallMount_Material_0.geometry}
          material={materials.WallMount_Material}
          position={[-1.216, -7.265, -6.88]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindowFrame.geometry}
        material={nodes.WindowFrame.material}
        position={[-2.034, 0, 2.555]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WindowL.geometry}
          material={materials.Window_material}
          position={[-1.915, 0.025, 0.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WindowR.geometry}
          material={materials.Window_material}
          position={[1.915, 0.025, 0.062]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindowFrame001.geometry}
        material={nodes.WindowFrame001.material}
        position={[1.95, 0, 2.555]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WindowL001.geometry}
          material={materials.Window_material}
          position={[-2.035, 0.025, 0.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WindowR001.geometry}
          material={materials.Window_material}
          position={[2.035, 0.025, 0.063]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorFrame.geometry}
        material={materials.Door_material}
        position={[3.293, 0, -2.939]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door.geometry}
          material={materials.Door_material}
          position={[0.418, 1.08, 0.022]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.005]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          />
        </mesh>
      </mesh>
    </group>
  );
};

useGLTF.preload('../models/newRoom01.glb');

export default Room;
