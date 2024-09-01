import React, { useRef, useState } from "react";
import Transition from "../Layout/PageTransition/Transition";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import img from "../../images/finial.jpeg";
// import { Link } from "react-router-dom";
import MagneticBtn from "../Layout/MagneticBtn/GsapMagnetic";
import SmallFooter from "../Layout/Footer/SmallFooter";
import VanillaLine from "../Layout/vanillaLine/VanillaLine";
import { LuArrowDownLeft } from "react-icons/lu";
import { slideUp } from "../anim";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    organizationName: "",
    service: "",
    message: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      organizationName: "",
      service: "",
      message: "",
    });
    console.log(data);
  };

  const handleChange = (e) => {
    setData((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };
  // ##################### for parallax
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end start"], // center of target and start of container means whole page(if target is whole container then 2nd argument is center of window).. end of target and start of container..
  });

  const springConfig = {
    damping: 100, // Higher damping to prevent oscillation
    stiffness: 300, // Stiffer spring for quick, smooth stop
    mass: 0.3, // Lower mass for quicker response
  };

  const y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const smoothy = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -250]),
    springConfig
  );
  // const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  // ####################### Done

  return (
    <>
      <Transition>
        <div className={styles.bg}></div>
        <motion.section
          className={styles.contact}
          variants={slideUp}
          initial="initial"
          animate="enter"
          ref={target}
        >
          <motion.div style={{ y: y }} className={styles.text}>
            <LuArrowDownLeft />
            <h3>
              <img src={img} alt="Akash avtar" />
              Let's start a{" "}
            </h3>
            <h3> project together</h3>
          </motion.div>
          <div className={styles.body}>
            <div className={styles.info}>
              <motion.div style={{ y: y }} className={styles.imgContainer}>
                <LuArrowDownLeft />
                <img src={img} alt="akash avtar" />
                <h2>Akash Singh ✌️</h2>
              </motion.div>

              <div className={styles.contactDetails}>
                <h4>Contact Details</h4>
                <a href="mailto:singhakash1922@gmail.com">
                  <p>singhakash1922@gmail.com</p>
                </a>
                <a href="tel:+919625016758">
                  <p>+91 96 25 01 67 58</p>
                </a>
              </div>

              <div className={styles.address}>
                <h4>Address</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88691.54666690034!2d77.09930539987344!3d28.487081096272078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1bd6be37ea9%3A0x9800d4b5d8530f44!2sSouth%20Delhi%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1724071301731!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  allowfullscreen=""
                  loading="lazy"
                  title="home"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className={styles.pincode}>
                  <p>South Delhi</p>
                  <p>110080</p>
                </div>
              </div>

              <div className={styles.socials}>
                <h4>socials</h4>

                <a
                  href="https://github.com/codex3616"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/aarush_singh_999?igsh=MTA3c2h1bm11cXZmaQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.insta}
                >
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/aakash.rajput.71465"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>

                <a
                  href="https://www.linkedin.com/in/akash-singh-0a2bb424a"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className={styles.contactForm}>
              <form onSubmit={submitHandler} autoComplete="off">
                <div className={styles.line}>
                  <VanillaLine />
                </div>
                <div className={styles.div}>
                  <p>01</p>

                  <input
                    type="text"
                    placeholder="john*"
                    required
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                  <label> What's your name ?</label>
                </div>
                <div className={styles.line}>
                  <VanillaLine />
                </div>

                <div className={styles.div}>
                  <p>02</p>
                  <input
                    type="email"
                    placeholder="john@gmail.com*"
                    required
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  <label> What's your email ?</label>
                </div>
                <div className={styles.line}>
                  <VanillaLine />
                </div>
                <div className={styles.div}>
                  <p>03</p>
                  <input
                    type="text"
                    placeholder="Indiviual or Organization*"
                    required
                    name="organizationName"
                    value={data.organizationName}
                    onChange={handleChange}
                  />
                  <label> What's the name of your organization ?</label>
                </div>
                <div className={styles.line}>
                  <VanillaLine />
                </div>

                <div className={styles.div}>
                  <p>04</p>

                  <input
                    type="text"
                    placeholder="Web design , Web devlopment... *"
                    required
                    name="service"
                    value={data.service}
                    onChange={handleChange}
                  />
                  <label>What's services are you looking for ?</label>
                </div>
                <div className={styles.line}>
                  <VanillaLine />
                </div>
                <div className={styles.div5}>
                  <p>05</p>

                  <textarea
                    id="message"
                    placeholder="Hello Akash, need to contact for ...*"
                    required
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                  ></textarea>
                  <label for="message"> your message ?</label>
                </div>

                <motion.div style={{ y: smoothy }}>
                  <MagneticBtn>
                    <button type="submit">Send it!</button>
                  </MagneticBtn>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.section>
        <div className={styles.footer}>
          <SmallFooter />
        </div>
      </Transition>
    </>
  );
};

export default Contact;
