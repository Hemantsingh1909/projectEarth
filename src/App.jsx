import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import Universe from "./components/universe";

function App() {
  const canvasRef = useRef();
  const [globeSize, setGlobeSize] = useState(
    Math.min(window.innerWidth * 0.8, 600)
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setGlobeSize(Math.min(window.innerWidth * 0.8, 600));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize the globe
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: globeSize * 2,
      height: globeSize * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [globeSize]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Universe - Background Layer */}
      <Universe numberOfStars={150} numberOfMeteors={10} />

      {/* Globe - Foreground Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase text-center pt-10">
          Project Earth
        </h1>
        <p className="text-lg text-center">- by Hemant Satwal</p>
        <div className="w-full max-w-[600px] aspect-square flex justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            aria-label="3D Globe Visualization"
            role="img"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
