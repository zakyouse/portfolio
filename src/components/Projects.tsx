import type { Variants } from "motion/react";

import * as motion from "motion/react-client";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa6";
import { BiLogoFirebase } from "react-icons/bi";
import { SiMongodb, SiGooglecloud, SiMysql } from "react-icons/si";

import zehn_img from "../assets/projects/Screenshot From 2025-03-28 09-13-53.png";
import kitas_img from "../assets/projects/Screenshot_2025-04-09_11_33_20.png";
import absolute_img from "../assets/projects/Screenshot From 2025-03-28 09-15-21.png";
import shaykes_img from "../assets/projects/shaykes_image.png";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const projects = [
  {
    year: "2024",
    title: "E-commerce",
    image: kitas_img,
    url: "https://kitas.netlify.app",
    stack: [
      <RiTailwindCssFill />,
      <FaReact />,
      <BiLogoFirebase />,
      <FaNodeJs />,
    ],
    category: "Jewelry",
  },
  {
    year: "2024",
    title: "Fundraising",
    image: zehn_img,
    url: "https://zehn.netlify.app",
    stack: [
      <IoLogoCss3 />,
      <FaReact />,
      <FaNodeJs />,
      <SiGooglecloud />,
      <SiMongodb />,
    ],
    category: "Donation",
  },
  {
    year: "2025",
    title: "Photography",
    image: shaykes_img,
    url: "https://shaykesstudios.co.ke",
    stack: [<RiTailwindCssFill />, <FaReact />, <SiMysql />, <FaPhp />],
    category: "Photography",
  },
  {
    year: "2025",
    title: "Senior Care",
    image: absolute_img,
    url: "https://absolutecareafhs.com",
    stack: [<RiTailwindCssFill />, <FaReact />, <SiMysql />, <FaPhp />],
    category: "Health",
  },
];

function Projects() {
  return (
    <div className="lg:h-[80vh] mb-8 lg:mb-0">
      <span className="flex items-center justify-between px-8">
        <h2 className="capitalize text-warning font-semibold my-8 text-center">
          Projects
        </h2>
      </span>

      <div className="grid lg:grid-cols-4 gap-4 px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-gray-800 shadow rounded-lg p-2 bg-[#ffffff00] backdrop-blur-sm"
            initial="offscreen"
            variants={cardVariants}
            viewport={{ once: false, amount: 0.2 }}
            whileInView="onscreen"
          >
            <p className="text-xs">{project.year}</p>
            <h3 className="text-lg font-bold text-gray-300">{project.title}</h3>
            <img
              alt={project.title}
              className="rounded border border-gray-500"
              src={project.image}
            />
            <p className="mt-2 text-sm">{project.category}</p>
            <div className="flex flex-col justify-between">
              <span className="my-2 flex items-center gap-4 text-gray-400 flex-wrap">
                {project.stack.map((item, i) => (
                  <p key={i} className="text-xl text-warning">
                    {item}
                  </p>
                ))}
              </span>
              <span className="flex items-center justify-between">
                <a
                  className="text-xs underline text-blue-400"
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Site
                </a>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
