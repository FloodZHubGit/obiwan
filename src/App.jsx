import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import { EcctrlJoystick } from "ecctrl";
import { useEffect, useState } from "react";

const EcctrlJoystickControls = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }, []);
  return <>{isTouchScreen && <EcctrlJoystick buttonNumber={5} />}</>;
};

function App() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];

  return (
    <>
      <EcctrlJoystickControls />
      <Canvas
        shadows
        camera={{ position: [3, 3, 3], fov: 65, near: 0.1, far: 1000 }}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") {
            e.target.requestPointerLock();
          }
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <Physics>
          <KeyboardControls map={keyboardMap}>
            <Experience />
          </KeyboardControls>
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
