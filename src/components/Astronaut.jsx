/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\\public\\models\\Astronaut.glb -o .\\src\\components\\Astronaut.jsx -r public 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Astronaut.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh
            name="FernandoTheFlamingo"
            geometry={nodes.FernandoTheFlamingo.geometry}
            material={materials.Atlas}
            skeleton={nodes.FernandoTheFlamingo.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Astronaut.glb");
