import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const GalleryImage = ({ src, alt }) => (
  <div className="gallery-image">
    <img src={src} alt={alt} />
  </div>
);

const GalleryRow = ({ images, direction = "left" }) => {
  const repeatedImages = [...images, ...images]; // Duplicate images for smooth scrolling

  return (
    <div className="gallery-row-wrapper">
      <motion.div
        className="gallery-row"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedImages.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </motion.div>
    </div>
  );
};

function Gallery({theme}) {
  const galleryImagesRow1 = [
    { src: "https://s3-alpha-sig.figma.com/img/a3f3/fb80/cc3a44c16f400cb26d86e441f5a8f54f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ivdfAoJGalGi9z-ziBMvtfuOqAdmE3nOD8LbGlG8oF1dATVkQE09lJeHvLdeV7YvepqZTvRaQtGwXypIXA6R0heIBHUf2RQfxthTKCAmmb-nrO5I2h6e3DuNUEUuCz4LubasZk2WupPBMYXN2ur-aVWSa3IRudtCWAJ0y~dv0PtryjyunjOx0cQVNwFjd4HyZhJDCuEoC7XSJEB-JhaYEARYLk~83PtimklR0GO~yVVKIJ2OSKnbc2-3XSTra4LbWXr3OuJvkTma72eUXF7mlA0gdCPs0c56ajKsdl2YbGwUZIGRU~kGzk4cQHMxkTd4LBP5MwRSgogfBNOYFGGdhQ__", alt: "Event 1" },
    { src: "https://s3-alpha-sig.figma.com/img/4766/b546/a8a02971d9b88e2d7893e345f1e2fcd1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FoeljU5pD1osaLUM1TEa0QTE1ZBhb0V5gVT42UE2itTsBt6mBdQPtB5V09ZRKip6~hcv88d9oeug8wvO9EsVV0tHKeChUCXgfftls3BQkQz9TSYixwmqQLEfII0mw452OvI0aacSQlFK1gFQLmN-21VjofomegBjh7mU6XY1tVyQ6PfQ8C1KdmeWqbYSVoKSE~hkLnbnyHjPvmbp3dpWkx1O~91vozsZLz-y2aubJSIbdYYqxFaV~lUTYNS8BEkWPJQauYz5h4~Ds2obr-5AIn2S-7WTXax9mHU40iPwityp1REYHoHXOXcJW1kijbeSxYxQZ3HkKyTZcfsmINg7tA__", alt: "Event 2" },
    { src: "https://s3-alpha-sig.figma.com/img/4bd3/5d6a/1a580c08c62329b27bd5cf9bf019a510?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RN0aSRejbVKdkNWKMbuB95zG2fGVRPXPEnSbiGNRDkSgTD3WBweA-pFtSRHnvs4O~9ZgNflWngD2mU7pwZWONSp440G9RxyP6dhP5j2IxX0zjFa4ePs69oUiPs4wYOw~zqqCUm2ed98NDLsyerouUaKjjNfbJslGFp9mppNTrgmMDzUrqdvrm~psGp5nOz1RXOthQjJeMPuIEwmauZnCR4bQ8-SXNGQyrddKASJiNk7kCvbdLd1uQegCY7Bx0ZTclWJHAsxFSPQSJb93CpO5oDCTzHPm2LSYZ8ywCaDOuBWYjqNIWylquv6zGlOjaQYKpjiO8tcs672CpxCNQcCBPA__", alt: "Event 3" },
    { src: "https://s3-alpha-sig.figma.com/img/6841/ab37/2d3f49a7b0f675ae15a9a5a7b208b8a9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FOFOqU1PMaiAdn7bqetrPCzZAY9kphso9zX2fWC7WTnblvk6We~86EUGcNcWzQUXJLwqv6gckbmBhlPBgljN4s8WQIlG9P8mnTLDb5glWykTE635McRzT9vr75onG~DFsDz4W3fkiDRvAPXWBqk5JyDv9tbN~ZK-KOX0ymfkxkhzwDbFndwUBC6QvOcR4biHiTrnKnxakjsMO3HS1mwve12RrjdClOTa1DZXlkS1Ec4usamCXnjM1DSBmCaRLG0ZGphkzCoNeJlFII4DuXS2NCRd3b5ItYhrNTN3gSWN7xRmJI5HAm14LAOagFhRAjRdmf3RdAmD7d6SdcJmzC0f5w__", alt: "Event 4" },
  ];

  const galleryImagesRow2 = [
    { src: "https://s3-alpha-sig.figma.com/img/8ed6/be10/23ac511f9e646a33b09cfb017ca5b568?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mgM2JloDgb0JmRmePtVL5WEeTJf3bWZ1OFhfZpGaYjnx6m8lsVJrt0aWKctylpJIgQ~AJ7HkNQDDc4mgR5jdBML4JITJJV4IRVw3NBaNVqs4L3jmLlNhowwAnZu8q3thigf1Uawe-jhZF08ygacHdNxP5SG7u23e3nSuCbUPv5oVGuBJhUa1HgTVFZvXUDXX-hOR9j2mFifyosThpcmll~kwmXFWkBkgu44vl9Yec8rhKBV0wyYDle9jcj4~7VOr1enKZ7YCfC9Wyq03KT3xl-CMQbdyJAfI02J4ed8FstImhm95n-FzyMzmNdNVt3P44YGfqlCwz1Q9yPZwJmEtlw__", alt: "Collab 1" },
    { src: "https://s3-alpha-sig.figma.com/img/08f1/50ab/1d53d26a6d068e4bd72a61131d1b6b4c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g9EYXrFQsntN~wLYRm8444M~x5Qgf~02Ldm7EPDX7Hdl7wpNUg-JHLllxKfhODAOs4FIogM45Geyf~63fmH~j0f~DJcTMx0XqhNZGFB7VUdkhB8HZ7uqNONLR6MoAV6y54Y8noNA9Bjk1CVvWb6mwX2NwXjzFIRuRHHCTpvmwrhOw~Ci574muQrK6FznP~oh0NPb1s8Y4dFY5UTbtqeyl-HtEYQOx5YfGT96NB1Oese8ZDFW6MoJnmDnynNAlozuFm7-M767tQRj7-d7MEpGzUpwVOAmyjNryjLyk4FLap-tHw5CpAXnjmmk4O~SKc8kZ9NOptNLFGtkOA0iHQcfOg__", alt: "Collab 2" },
    { src: "https://s3-alpha-sig.figma.com/img/7612/e476/e4b9ce4cbf5027e3ab1bdd4f0f390943?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UXPTvA8xXK10I2~WC4O6lRVbYmaKCrEw4VlPRPUn9Kecmk0w1u5K1F~yP4wkc4yYNt5pOmGfgVmMhoBjow9~7HgNFRrRPpv7ZIjAFwHkiJy5b92zCBThxEfRgK8MViQUDUX690QJ-GqpRzqZp7I22hfgQiD-MCJ7PozXhXKbyhatBDyQka1KDiha8u8k4IbSnccF280CfsxJHVHkcu-d67G-P4RzXgT6n~ASnM2gWbDVMZia8MXB5ztfDJHcEswekRQ98HBtEwIpYzu2Xy-NjiAK2sjYCwpdBhMypHQzyGtPthTgN~LhJz1dLyEamEig6N64KJMcMDvA6dE4gjcAXA__", alt: "Collab 3" },
    { src: "https://s3-alpha-sig.figma.com/img/01c3/7d11/636ef05971c66ad9b61f22e1cc4acdc5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UVDsr7I83fZXcSmodCDXdIushokaWYJoydOBhcK0qznt9JW1W9xVhn404vGcFeHxEb81qD~uy3y-QDvpWmFQ2C6dK-fhH2X-T64vYUYbGDevwupmbDETdP0PxbfICN3o9oRbID3I80CpLFZdsBDB6Z88aU0QqxXsZsSWe8sIeFvvwGjnj41Anmfk6mqIe5L8s0S85W1WsnnF1SBAo03GeKUbpacEdynWCRdQWPsJRwZ9gNsQqT3M-CHjhWVpe-srxi2QmeStNsKGs66tH8tIOQ3Rv3gGg6mZpsh97~NlVEroeQOFVcMFDzMMxJR8OyykgMb-azc~ANUU46aEcApBSg__", alt: "Collab 4" },
  ];

  return (
    <section className={`gallery-main ${theme}`}>
      <div className="gallery-frame">
        <div className="gallery-top">
          <div className="gallery-top-frame">
            <aside>
              <img src="./assets/images/Image [h-3].png" alt="Develop Relationships" />
              <p>DEVELOP RELATIONSHIPS</p>
            </aside>
            <aside>
              <div className="top-left">
                <h1>Checkout our <br /> Events and Collabs</h1>
              </div>
              <div className="top-right">
                <p>
                  Join our highly motivated and like-minded <br />
                  community of passionate highschool entrepreneurs. <br />
                  Meet your future co-founders, colleagues, and <br />
                  friends and have the best time of your life.
                </p>
              </div>
            </aside>
          </div>
        </div>
        <div className="gallery-bottom">
          <GalleryRow images={galleryImagesRow1} direction="left" />
          <GalleryRow images={galleryImagesRow2} direction="right" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
