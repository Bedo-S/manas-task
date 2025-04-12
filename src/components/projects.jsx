import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import ottoImage from "./images/otto.png";
import seraphim from "./images/seraphim.png";
import eve from "./images/eve.png";
import antauri from "./images/antauri.png.png";
import freyja from "./images/freyja.jpeg";
const images = [
  {
    src: freyja,
    alt: "Freyja",
    description: "Freyja is our first entry into the Mahindra Rise Prize challenge held at the Mahindra Research Valley in Chennai, India, in 2023. Freyja is a fully autonomous vehicle that can navigate through complex environments and perform tasks without human intervention."
  },
  {
    src: ottoImage,
    alt: "Otto",
    description: "OTTO is our third entry into the International Ground Vehicle Challenge held at Oakland University in Rochester, Michigan, USA, in 2023."
  },
  {
    src: eve,
    alt: "EVE",
    description: "Eve, our driverless car, boasts a software stack capable of Level 2 autonomy behaviour such as real-time navigation and mapping, as well as lane following and switching. Project MANAS is the youngest and the only fully undergraduate team to qualify for the Mahindra Rise Prize challenge where we stood in the top 13 finalists out of 300 teams.",
  },
  {
    src: seraphim,
    alt: "Seraphim",
    description: "Seraphim was our first ever entry into the 20th Student Unmanned Aerial Systems Competition held at St. Mary’s College, Maryland, USA, in 2022."
  },
  {
    src: antauri,
    alt: "Antauri",
    description: "Placeholder image for testing purposes."
  }
];

export default function SlideshowGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="Projects" className="gallery-container">
      <div className="section-header">Our Projects</div>
      <div className="gallery-main">
        <motion.div
          key={images[currentIndex].src}
          className="gallery-image-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="gallery-image"
          />
        </motion.div>
        <motion.div
          className="gallery-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="gallery-description-heading">{images[currentIndex].alt}</h3>
          <p>{images[currentIndex].description}</p>
        </motion.div>
      </div>

      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-wrapper ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
