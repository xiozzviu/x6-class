import { motion } from "framer-motion";
import headerBanner from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerBanner})` }}
      />
      <motion.div
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "200% 0%" }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        className="absolute top-20 left-1/2 -translate-x-1/2 
                  w-[140%] h-6 rotate-6 z-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #d4a017 0px, #d4a017 25px, #1a1a1a 25px, #1a1a1a 50px)",
          backgroundSize: "200% 100%",
        }}
      />

      <motion.div
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "-200% 0%" }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 
                  w-[140%] h-6 -rotate-6 z-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #d4a017 0px, #d4a017 25px, #1a1a1a 25px, #1a1a1a 50px)",
          backgroundSize: "200% 100%",
        }}
      />

      <motion.div
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(0, 100, 255, 0.6), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      <motion.div
        animate={{ opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(255, 0, 0, 0.6), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-52">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif leading-tight"
        >
          Welcome to
          <br />
          <span className="relative inline-block overflow-hidden">
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 rounded-xl p-4 bg-yellow-400 z-0"
            />

            <span className="relative z-10 font-bold text-black px-2">
              X-6 `28
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-md text-gray-200"
        >
          In Every <span className="text-xl font-bold">Laugh</span> and{" "}
          <span className="text-yellow-900 font-bold">tiredness</span>,
          <br />
          We keep a <span className="text-xl font-bold">Flame</span> that{" "}
          <span className="text-red-700 font-bold">never</span> goes out;
          <br />
          the light that guides us to be more than just a class.
        </motion.p>
      </div>
    </section>
  );
}
