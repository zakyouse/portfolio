import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IoLogoCss3, IoLogoPython } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa6";
import { BiLogoFirebase } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
const stackData = [
  { name: "React.js", level: 80, icon: <FaReact className="text-sky-500" /> },
  {
    name: "JavaScript",
    level: 90,
    icon: <RiJavascriptFill className="text-yellow-500" />,
  },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "MongoDB",
    level: 70,
    icon: <SiMongodb className="text-green-500" />,
  },
  { name: "MySQL", level: 90, icon: <SiMysql className="text-blue-500" /> },
  { name: "PHP", level: 85, icon: <FaPhp className="text-indigo-600" /> },
  {
    name: "Firebase",
    level: 70,
    icon: <BiLogoFirebase className="text-yellow-400" />,
  },
  {
    name: "Tailwind CSS",
    level: 78,
    icon: <RiTailwindCssFill className="text-cyan-500" />,
  },
  {
    name: "Python",
    level: 50,
    icon: <IoLogoPython className="text-blue-400" />,
  },
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 90, icon: <IoLogoCss3 className="text-blue-600" /> },
];

export default function MyStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <div className="px-8">
      <h2 className="text-warning font-bold text-center mb-8 animate__animated animate__fadeInDown">
        My Tech Stack
      </h2>
      <div ref={sectionRef} className="grid md:grid-cols-3 lg:gap-2">
        {stackData.map((tech, idx) => (
          <motion.div
            key={tech.name}
            animate={{ opacity: 1, x: 0 }}
            className="shadow-md rounded-2xl p-4 flex flex-col gap-2"
            initial={{ opacity: 0, x: -50 }}
            transition={{ delay: idx * 0.3 }}
          >
            <div className="flex items-center gap-3  font-semibold">
              {tech.icon}
              {tech.name}
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
              <motion.div
                animate={isInView ? { width: `${tech.level}%` } : {}}
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                transition={{ duration: 1.2, delay: idx * 0.1 }}
              />
            </div>
            <div className="text-right text-sm text-warning">{tech.level}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
