import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [textEntered, setTextEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextEntered(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Top star shape */}
      <motion.svg
        width={80}
        height={50}
        viewBox="0 0 120 120"
        fill="none"
        className="mb-0"
        initial={{ scale: 0.2, opacity: 0, y: 40, x: -120, rotate: -180 }} // changed to -180 for clockwise
        animate={{
          scale: 1,
          opacity: 1,
          y: textEntered ? -30 : 0,
          x: 0,
          rotate: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          y: {
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: textEntered ? 0 : undefined,
          },
        }}
      >
        <path
          d="M60 0
             Q75 60 120 60
             Q75 60 60 120
             Q45 60 0 60
             Q45 60 60 0
             Z"
          fill="white"
        />
      </motion.svg>

      {/* Bottom half-rhombus shape */}
      <motion.svg
        width={480}
        height={100}
        viewBox="0 50 120 120"
        fill="none"
        className="mb-0"
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: textEntered ? -18 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          y: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: textEntered ? 0 : undefined,
          },
        }}
      >
        <defs>
          <clipPath id="reveal-clip">
            <motion.rect
              x="0"
              initial={{ y: 120, height: 0 }}
              animate={{ y: 50, height: 70 }}
              width="120"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </clipPath>
          <clipPath id="fill-clip">
            <motion.rect
              x="0"
              y="50"
              height="70"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
            />
          </clipPath>
        </defs>
        {/* Filled path, revealed left-to-right */}
        <path
          d="M0 60
       Q45 60 60 120
       Q75 60 120 60
       Z"
          fill="white"
          clipPath="url(#fill-clip)"
          style={{ opacity: 1 }}
        />
        {/* Stroke path, revealed bottom-to-top */}
        <path
          d="M0 60
       Q45 60 60 120
       Q75 60 120 60
       Z"
          fill="none"
          stroke="white"
          strokeWidth={1}
          clipPath="url(#reveal-clip)"
        />
      </motion.svg>

      {/* ELEVATE Text */}
      <motion.h1
        className="text-5xl tracking-[0.5em] font-semibold"
        initial={{ opacity: 0, y: 40, color: "#888888" }}
        animate={{
          opacity: 1,
          y: 0,
          color: textEntered ? "#ffffff" : "#888888",
        }}
        transition={{
          opacity: { duration: 1.5, delay: 1, ease: "easeOut" },
          y: { duration: 1.5, delay: 1, ease: "easeOut" },
          color: { duration: 0.5, delay: 1, ease: "easeInOut" },
        }}
      >
        ELEVATE
      </motion.h1>
    </div>
  );
}
