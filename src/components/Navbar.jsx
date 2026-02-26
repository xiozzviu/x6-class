import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logox6 from "../assets/logo_x_6.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-linear-to-r from-[#1c1f3b] to-purple-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-white font-semibold tracking-tight"
        >
          <img src={logox6} alt="Logo" className="h-10 md:h-12 rounded-full" />
        </motion.div>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-white font-medium"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {link}

              <motion.span
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-0.5 bg-black"
              />
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
            className={`w-6 h-1 ${open ? "bg-red-500" : "bg-white"}`}
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className={`w-6 h-1 ${open ? "bg-red-500" : "bg-white"}`}
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className={`w-6 h-1 ${open ? "bg-red-500" : "bg-white"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileTap={{ scale: 0.95 }}
                  className="text-lg font-medium text-gray-700"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
