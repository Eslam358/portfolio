import "./contact.scss";

import { useForm, ValidationError } from "@formspree/react";

import Lottie from "lottie-react";

import groovyWalkAnimation from "../../animation/contact.json";
import Animation_done from "../../animation/done.json";
import { useRef } from "react";

const Contact = () => {
  const lottieRef = useRef();

  const [state, handleSubmit] = useForm("xbjneqjr");
  return (
    <section className="section" id="Contact">
      <h2>
        <span className="icon-envelope-o" />
        contact us.
      </h2>
      <p>
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="main-Contact flex ">
        <div className="form ">
          <form onSubmit={handleSubmit} className="flex column  ">
            {/* <div>

          </div> */}
            <label htmlFor="email " className="flex   gap-1 center">
              Email Address:
              <input
                placeholder="Email Address"
                id="email"
                type="email"
                name="email"
              />
            </label>

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="Message" className="flex   gap-1 center">
              Your message:
              <textarea placeholder="Message" id="message" name="message" />
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>

          <div className="Message">
            {state.succeeded &&
              <h3 className="flex center gap-1">
                
                <span>
                  <Lottie
                    animationData={Animation_done}
                    lottieRef={lottieRef}
                    className="Animation_done"
                    loop={false}
                    autoplay={true}
                  
                    onLoadedImages={() => {
                      // @ts-ignore
                      // https://lottiereact.com/
                      lottieRef.current.setSpeed(0.5);
                    }}
                  />
                </span>
                <span>{"Thanks, I'll reply ASAP :"}</span>{" "}
              </h3>
            }
            {state.errors && (
              <h3 style={{ color: "red" }}>{"errors, this something wrong:"}</h3>
            )}
          </div>
        </div>
        <div className=" animation right Tablets-none">
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
    </section>
  );
};

export default Contact;
