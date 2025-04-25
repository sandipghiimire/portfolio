"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Loader = ({ logo = "/sandip.jpg" }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 1000);
        return 100;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center z-50 space-y-8"
        >
          {/* Logo Image with subtle animation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-40 h-40"
          >
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

           <div className="w-64 space-y-4">
      {/* Progress Bar */}
      <motion.div
        className="h-2 bg-neutral-700 rounded-full overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-white origin-left"
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Percentage Text */}
      <motion.div
        className="text-center text-neutral-400 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {progress}% LOADED
      </motion.div>
    </div>

          {/* Powered By Text */}
          <motion.div
            className="absolute bottom-8 text-neutral-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Powered by <span className="text-red-600 font-bold">Sandip Ghimire</span>
          </motion.div>

          {/* Subtle Background Animation */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              backgroundColor: [
                "rgba(23,23,23,1)",
                "rgba(30,30,30,1)",
                "rgba(23,23,23,1)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Loader;
