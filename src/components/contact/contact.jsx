import "./contact.scss";

import { useForm, ValidationError } from "@formspree/react";

import Lottie from "lottie-react";

import groovyWalkAnimation from "../../animation/contact.json";
import Animation_done from "../../animation/done.json";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const lottieRef = useRef();
    const { t } = useTranslation();

  const [state, handleSubmit] = useForm("xbjneqjr");
  return (
    <section className="section" id="Contact">
      <h2>
        <span className="icon-envelope-o" />
       <span >{t("contact_.title")}</span>
      </h2>
      <p>
        {t("contact_.contact_text")}
      
      </p>

      <div className="main-Contact flex ">
        <div className="form ">
          <form onSubmit={handleSubmit} className="flex column  ">
            {/* <div>

          </div> */}
            <label htmlFor="email " className="flex   gap-1 center">
            {t("contact_.email")} :
              <input
                placeholder={t("contact_.email")}
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
            {t("contact_.message")}:
              <textarea placeholder={t("contact_.message")} id="message" name="message" />
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
            {t("contact_.send")}
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
                <span>{t("contact_.reply_message")} :</span>{" "}
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
