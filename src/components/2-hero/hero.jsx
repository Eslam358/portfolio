import "./hero.scss";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../animation/dev.json";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  const lottieRef = useRef();
  const [copy_text, setcopy_text] = useState("false");
  const copy_phone = (text, mas) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setcopy_text(`copy the ${mas}`);
        setTimeout(() => {
          setcopy_text("false");
        }, 4000);
      })
      .catch((err) => console.error("fault"));
  };

  return (
    <div className="hero flex between" id="hero">
      <div className="info ">
        <motion.div
          className="img"
          initial={{ transform: `scale(0.5)` }}
          // animate={{ transform: "scale(1)" }}
          whileInView={{ transform: "scale(1) " }}
          transition={{ type: "spring", damping: 5, stiffness: 53 }}
        >
          <div className="fff">
            {" "}
            <img src="eee.jpg" alt="" />
            {/* <img width={"100%"} src="eslam.jpg" alt="" /> */}
          </div>
          {/* <img src="eslam.png" alt="" /> */}
        </motion.div>
        <h1>{t("frontend_title")}</h1>
        <p>{t("frontend_description")}</p>
        <h4 style={{display:"flex", gap:"10px", justifyItems:"center"}}>
          {" "}
          <button className="copy phone" rel="noopener noreferrer">
            {" "}
            <span className=" icon-call" />{" "}
          </button>{" "}
       <span>01002679358</span>   
          <span
            title="copy phone number"
            onClick={() => copy_phone("01002679358", "phone")}
            className="icon-content_copy"
          />
        </h4>
        <h4 style={{display:"flex", gap:"10px", justifyItems:"center"}}>
          <a
            href="mailto:eslam900aa@gmail.com"
            className="copy email"
            rel="noopener noreferrer"
          >
            <span className="icon-envelope-o" />
          </a>
            <span>eslamaa900@gmail.com</span> 
          <span
            className="icon-content_copy"
            title="copy email"
            onClick={() => copy_phone("eslamaa900@gmail.com", "email")}
          />
        </h4>
        <div className="icon">
          <a
            href="https://github.com/ESlam358"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="icon-github-square" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/eslam-fayez-462181193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="icon-linkedin-square" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100004459908381"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
            <span className="icon-facebook-square" />
          </a>

          <a
            href="https://wa.me/201002679358"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="icon-whatsapp" />{" "}
          </a>
          <a
            href="https://t.me/ISLAMFAYEZ358"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="icon-telegram" />{" "}
          </a>

          <a
          href="https://portfolio-eslam.netlify.app/cv/FullStack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download_cv"
            title="download the CV "
            style={{width:"100px",textAlign:"center"}}
          >
            CV  <span className=" flex center icon-download " style={{margin:"10px"}} />
           
          </a>
          {/* </a> */}
        </div>
      </div>
      <div className="animation Tablets-none">
        <Lottie
          animationData={groovyWalkAnimation}
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
        />
      </div>
      {copy_text !== "false" && (
        <div className="text-copy">
          <span className="icon-content_copy" />
          {copy_text}
        </div>
      )}
    </div>
  );
};

export default Hero;
