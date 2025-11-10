import "./hero.scss";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../animation/dev.json";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
console.log("gggggggggggggg");

const Hero = () => {
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
  // const pdf_down = "https://portfolio-eslam.netlify.app/cv/FullStack.pdf";

  // const download_file = (url) => {
  //   fetch(url)
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       const blob_url = window.URL.createObjectURL(new Blob([blob]));

  //       const fileName = "cv/" + url.split("/").pop();
  //       const atag = document.createElement("a");
  //       atag.href = blob_url;
  //       atag.setAttribute("download", fileName);
  //       document.body.appendChild(atag);
  //       atag.click();
  //       atag.remove();
  //     });
  // };

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
        <h1> front end developer</h1>
        <p>
          Passionate Frontend Developer with expertise in modern web
          technologies including React, Next.js, and TypeScript. Strong
          foundation in creating responsive, user-friendly applications with
          clean code architecture. Experienced in full-stack development with
          MongoDB and Supabase. Committed to continuous learning and
          implementing best practices in web development.
        </p>
        <h4>
          {" "}
          <button className="copy phone" rel="noopener noreferrer">
            {" "}
            <span className=" icon-call" />{" "}
          </button>{" "}
          01002679358
          <span
            title="copy phone number"
            onClick={() => copy_phone("01002679358", "phone")}
            className="icon-content_copy"
          />
        </h4>
        <h4>
          <a
            href="mailto:eslam900aa@gmail.com"
            className="copy email"
            rel="noopener noreferrer"
          >
            <span className="icon-envelope-o" /> eslamaa900@gmail.com
          </a>
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
            // onClick={() => download_file(pdf_down)}
          >
            CV <span className=" flex center icon-download " />
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
            // https://lottiereact.com/
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
