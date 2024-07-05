import { Grid, OrbitControls } from "@react-three/drei";
import { BallCollider, RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Demon } from "./Demon";
import { Obiwan } from "./Obiwan";

export const Experience = () => {
  const characterURL = "./models/ObiwanAnimated.glb";

  const animationSet = {
    idle: "Idle",
    walk: "Walking",
    run: "Running",
    jump: "JumpUp",
    jumpIdle: "JumpLoop",
    jumpLand: "JumpDown",
    fall: "Falling",
  };

  return (
    <>
      <ambientLight intensity={1} />

      <directionalLight position={[0, 10, 0]} intensity={1} castShadow />

      <Grid
        args={[300, 300]}
        sectionColor={"lightgray"}
        cellColor={"gray"}
        position={[0, 5.01, 0]}
        userData={{ camExcludeCollision: true }}
      />

      <directionalLight position={[0, 0, 0]} intensity={10} castShadow />

      <Ecctrl debug animated>
        <EcctrlAnimation
          characterURL={characterURL}
          animationSet={animationSet}
        >
          <Obiwan scale={1} position={[0, -0.9, 0]} />
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

      <RigidBody position={[5, 5, 0]} colliders={false} mass={0.1}>
        <mesh castShadow scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <BallCollider args={[0.5]} />
      </RigidBody>

      <RigidBody position={[-5, 5, 0]} colliders={false} mass={0.1}>
        <mesh castShadow scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <BallCollider args={[0.5]} />
      </RigidBody>

      <RigidBody position={[0, 5, 5]} colliders={false} mass={0.1}>
        <mesh castShadow scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#0051ff" />
        </mesh>
        <BallCollider args={[0.5]} />
      </RigidBody>

      <RigidBody position={[0, 5, -5]} colliders={false} mass={0.1}>
        <mesh castShadow scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <BallCollider args={[0.5]} />
      </RigidBody>
    </>
  );
};
