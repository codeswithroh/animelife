import React, { useEffect, useState } from "react";
import "../styles/About.css";
import Navbar from "./Navbar";
import Instagram from "../assets/instagram.svg";
import Gmail from "../assets/gmail.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

export default function About() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="about-container">
          <Navbar />
          <div className="about-container-mobile-background"></div>
          <div className="about-section about-section-1">
            <div className="about-section-1-content">
              <h1
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                About AnimeLife
              </h1>
              <p
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                A simple site made for content-creators and anime lovers to read
                all the quotes made by their favorite characters and really
                understand the true essene of anime
              </p>
            </div>
          </div>
          <div className="about-section about-section-2">
            <div className="about-section-2-content">
              <h1
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-delay="200"
                data-aos-offset="100"
              >
                About Me
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-delay="200"
                data-aos-offset="300"
              >
                I am a proud otaku and a man of culture 😉. I believe that anime
                has the power to teach a lot in life. That'swhy I have taken
                upon myself to preach about anime to everyone in order to show
                them that anime is more than just cartoons that kids watch.
              </p>
              <p
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-delay="400"
                data-aos-offset="10"
                className="anime-is-life"
              >
                Anime is life
              </p>
            </div>
          </div>
          <div className="about-section about-section-3">
            <div className="about-section-3-content">
              <p
                data-aos="fade-up-right"
                data-aos-easing="linear"
                data-aos-delay="300"
                data-aos-offset="10"
              >
                If you want to discuss anything about anime then feel free to
                contact me
              </p>
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-delay="400"
                data-aos-offset="120"
                className="socials"
              >
                <Link to="/feedback">
                  <img src={Gmail} alt="gmail" />
                </Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/otaku_._sempai/"
                >
                  <img src={Instagram} alt="instagram" />
                </a>
              </div>
              <p
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-offset="100"
                className="self-plug"
              >
                I also have a small community in Instagram where I post my
                reviews about different animes. If you are interested then make
                sure to give it a follow.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
