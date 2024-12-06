import "assets/css/particles.css";
import { default as ReactParticles } from "react-tsparticles";
import particlesOptions from "assets/json/particles.json";
import { ISourceOptions } from "tsparticles";

export const Particles = () => {
  return <ReactParticles options={particlesOptions as ISourceOptions} />;
};
