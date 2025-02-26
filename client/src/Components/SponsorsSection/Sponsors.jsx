import React from "react";
import { motion } from "framer-motion";
import "./Sponsors.css";

const SponsorLogo = ({ logo, alt, theme }) => (
  <div className={`sponsor-logo ${theme}`}>
    <img src={logo} alt={alt} className="sponsor-image" />
  </div>
);

const SponsorRow = ({ logos, direction = "left", theme }) => {
  // Duplicate the logos once to make a seamless transition
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="sponsor-row-wrapper">
      <motion.div
        className="sponsor-row"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <SponsorLogo
            key={index}
            logo={logo.src}
            alt={logo.alt}
            theme={theme}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Main SponsorsSection Component
const SponsorsSection = ({ theme }) => {
  const startIcon =
    theme === "dark"
      ? "https://i.imgur.com/jyxJUPL.png"
      : "https://i.imgur.com/kvQ6Jok.png";

  const logosRow1 = [
    {
      src: "https://i.imgur.com/ZoCk1rK.png",
      alt: "PwC",
    },
    { src: "https://i.imgur.com/tQBcNNb.png", alt: "Bank of America" },
    { src: "https://i.imgur.com/H18pmrN.png", alt: "Microsoft" },
    { src: "https://i.imgur.com/rOEBZsF.png", alt: "NextTech" },
    { src: "https://i.imgur.com/v8BvrtO.png", alt: "Point" },
  ];

  const logosRow2 = [
    { src: "https://i.imgur.com/WVBMnWX.png", alt: "Spotify" },
    { src: "https://i.imgur.com/oKh08Lf.png", alt: "Student Council" },
    { src: "https://i.imgur.com/11d6cJd.png", alt: "Summit" },
    { src: "https://i.imgur.com/LKp0WTp.png", alt: "UNIS Hanoi" },
    { src: "https://i.imgur.com/BTPzWZM.png", alt: "Vietcombank" },
  ];

  return (
    <section className={`sponsors-section ${theme}`}>
      <div className="sponsors-header">
        <div>
          <img src={startIcon} alt="start-icon" />
          <h3>PARTNERS & SPONSORS</h3>
        </div>
        <h2>
          Our program is <br /> backed by the best.
        </h2>
        <p>
          We have a dynamic network of companies <br /> and schools that support
          our mission.
        </p>
      </div>
      <div className="sponsor-rows-container">
        <SponsorRow logos={logosRow1} direction="left" theme={theme} />
        <SponsorRow logos={logosRow2} direction="right" theme={theme} />
      </div>
    </section>
  );
};

export default SponsorsSection;
