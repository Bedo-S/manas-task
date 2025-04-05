import React from "react";
import "./styles.css";

import bossard from "./images/sponsors/bossard.png";
import continental from "./images/sponsors/continental.png";
import cm from "./images/sponsors/cooler-master.png";
import gigabyte from "./images/sponsors/gigabyte.png";
import ib from "./images/sponsors/indian-bank.png"
import mahindra from "./images/sponsors/mahindra-rise.png";
import ms from "./images/sponsors/microsoft.png";
import nvidia from "./images/sponsors/nvidia.png";
import ni from "./images/sponsors/national-instruments.png";
import pf from "./images/sponsors/pepperl-fuchs-text.png";
import sica from "./images/sponsors/sica.png";
import sick from "./images/sponsors/sick.png";
import simscale from "./images/sponsors/simscale.png";
import vector from "./images/sponsors/vector.png";
import vi from "./images/sponsors/veekay impex.png";
import ximea from "./images/sponsors/ximea.png";


const sponsors = [
  {
    name: "Bossard",
    logo: bossard,
    link: "https://example.com"
  },
  {
    name: "Continental",
    logo: continental,
    link: "https://example.com"
  },
  {
    name: "Cooler Master",
    logo: cm,
    link: "https://example.com"
  },
  {
    name: "Gigabyte",
    logo: gigabyte,
    link: "https://example.com"
  },
  {
    name: "Indian Bank",
    logo: ib,
    link: "https://example.com"
  },
  {
    name: "Mahindra-Rise",
    logo: mahindra,
    link: "https://example.com"
  },
  {
    name: "National Instruments",
    logo: ni,
    link: "https://example.com"
  },
  {
    name: "Microsoft",
    logo: ms,
    link: "https://example.com"
  },
  {
    name: "NVIDIA",
    logo: nvidia,
    link: "https://example.com"
  },
  {
    name: "Pepperl+Fuchs",
    logo: pf,
    link: "https://example.com"
  },
  {
    name: "SICK",
    logo: sick,
    link: "https://example.com"
  },
  {
    name: "SimScale",
    logo: simscale,
    link: "https://example.com"
  },
  {
    name: "Vector",
    logo: vector,
    link: "https://example.com"
  },
  {
    name: "Veekay Impex",
    logo: vi,
    link: "https://example.com"
  },
  {
    name: "Ximea",
    logo: ximea,
    link: "https://example.com"
  },
  {
    name: "SICA",
    logo: sica,
    link: "https://example.com"
  }
];

const Sponsors = () => {
  return (
    <section id="Sponsors" className="sponsors-section">
      <h2>Our Sponsors</h2>
      <p>We are grateful to our sponsors for their unwavering support and contributions.</p>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="sponsor-logo"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
