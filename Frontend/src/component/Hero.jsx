import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
     
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/image.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          Digital Krishi Officer
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-lg text-xl transition"
        >
          ➜ Enter
        </button>
      </div>
    </div>
  );
}
