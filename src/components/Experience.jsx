import { Grid, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Astronaut } from "./Astronaut";
import { Demon } from "./Demon";

export const Experience = () => {
  const characterURL = "./models/Demon.glb";

  const animationSet = {
    idle: "CharacterArmature|Idle",
    walk: "CharacterArmature|Walk",
    run: "CharacterArmature|Run",
    jump: "CharacterArmature|Jump",
    jumpIdle: "CharacterArmature|Jump_Idle",
    jumpLand: "CharacterArmature|Jump_Land",
    fall: "CharacterArmature|Duck",
    action1: "CharacterArmature|Wave",
    action2: "CharacterArmature|Death",
    action3: "CharacterArmature|HitReact",
    action4: "CharacterArmature|Punch",
  };

  return (
    <>
      <ambientLight intensity={5} />

      <Grid
        args={[300, 300]}
        sectionColor={"lightgray"}
        cellColor={"gray"}
        position={[0, 5.1, 0]}
        userData={{ camExcludeCollision: true }} // this won't be collide by camera ray
      />

      <directionalLight position={[0, 0, 0]} intensity={10} castShadow />

      <Ecctrl debug animated>
        <EcctrlAnimation
          characterURL={characterURL}
          animationSet={animationSet}
        >
          <Demon scale={0.5} position={[0, -0.9, 0]} />
        </EcctrlAnimation>
      </Ecctrl>

      <RigidBody type="fixed">
        <mesh
          position-y={-20}
          rotation-x={-Math.PI / 2}
          scale={50}
          receiveShadow
        >
          <boxGeometry />
          <meshBasicMaterial color="lightgreen" />
        </mesh>
      </RigidBody>
    </>
  );
};
