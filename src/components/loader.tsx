"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Correct usage of useEffect: Always at top level
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 500); // Delay before fading out
        return 100;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50"
          aria-label="Loading screen"
        >
          <motion.div
            className="text-4xl font-semibold mb-6"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            Loading {progress}%
          </motion.div>

          <div className="flex space-x-4 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-white rounded-full"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
