// RiveCircle.jsx
import { useRive } from "@rive-app/react-canvas";

export default function RiveCircle({ src }) {
  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: "State Machine 1", // <-- Use the state machine name
    autoplay: true,
  });

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-full">
      <RiveComponent className="w-full h-full object-fill" />
    </div>
  );
}
