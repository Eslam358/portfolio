import "./hero.scss";
import Lottie, { useLottie } from "lottie-react";
// import groovyWalkAnimation from "./animation/Animation - 1717044747634.json";
// import groovyWalkAnimation from "../../../public/animation/Animation - 1717044747634.json";
import groovyWalkAnimation from "../../animation/dev.json";
import { useRef, useState } from "react";
const Hero = () => {
  const lottieRef = useRef();
  // const options = {
  //   animationData: groovyWalkAnimation,
  //   loop: true,
  //   autoplay: true,

  // };

  // const { View } = useLottie(options);

  return (
    <div className="hero flex between">
      <div className="info ">
        <div className="img">
          <img src="eslam.png" alt="" />
        </div>
        <h1>Software designer, founder, and amateur astronaut.</h1>
        <p>
          I’m Ali Hassan, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div className="icon">
          <span className="icon-github-square" />
          <span className="icon-linkedin-square" />
          <span className="icon-facebook-square" />
          <span className="icon-twitter" />
          <span className="icon-whatsapp" />
          <span className="icon-telegram" />
        </div>
      </div>
      <div className="animation Tablets-none">
        <Lottie
          animationData={groovyWalkAnimation}
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
