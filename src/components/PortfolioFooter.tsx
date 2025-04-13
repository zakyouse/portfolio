import { motion } from "framer-motion";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoLinkedin,
} from "react-icons/io5";
export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      animate={{ opacity: 1, y: 0 }}
      className="bg-black text-gray-300 py-10 px-6 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Zakyouse Portfolio
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Turning ideas into code and design.
          </p>
          <p className="text-sm">
            Email:{" "}
            <a className="underline" href="mailto:zakyouseo@email.com">
              zakyouseo@email.com
            </a>
          </p>
          <p className="text-sm">Phone: +254 705 635 338</p>
        </div>

        {/* Center Section: Socials */}
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-white text-lg font-semibold">Connect</h3>
          <div className="flex items-center gap-4 mt-2">
            <a
              className="text-xl hover:text-green-400 transition-colors"
              href="https://wa.me/254705635338"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              className="text-xl hover:text-pink-400 transition-colors"
              href="https://instagram.com/youverse.ke"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoInstagram />
            </a>
            <a
              className="text-xl hover:text-blue-400 transition-colors"
              href="https://linkedin.com/in/zakyouse-okoth-883606203"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section: Extra Details */}
        <div className="text-sm text-gray-400">
          <p>Based in Nairobi, Kenya 🌍</p>
          <p>Built with React & Tailwind CSS</p>
          <p className="text-warning">
            Open to freelance or remote work opportunities
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {currentYear} Zakyouse. All rights reserved.
      </div>
    </motion.footer>
  );
}
