import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          // onHover: {
          //   enable: true,
          //   mode: "repulse",
          // },
        },
        mode: {
          push: {
            quantity: 5,
          },
          repulse: {
            radius: 300,
          },
        },
      },
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          // value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  });

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
