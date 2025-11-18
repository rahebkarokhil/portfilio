 
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BackgroundLines } from "./background-lines";


function Hero() {
  return (
    <div className="relative w-full min-h-[100svh]m bg-black overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <BackgroundLines />
        
      </div>

      {/* Content */}
      <div id="Home" className="relative z-10 flex flex-col justify-center min-h-[100svh] w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1200px] text-white">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-semibold font-poppins leading-tight break-words
                       text-[clamp(60px,8vw,72px)] md:text-[clamp(48px,6vw,96px)]"
          >
            I'M
          </motion.h1>

          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-semibold font-poppins text-yellow-600 leading-tight break-words
                       text-[clamp(60px,8vw,72px)] md:text-[clamp(48px,6vw,96px)]"
          >
            RAHEB
          </motion.h1>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative font-semibold font-poppins leading-tight break-words inline-flex items-baseline gap-2
                       text-[clamp(60px,8vw,72px)] md:text-[clamp(48px,6vw,96px)]"
          >
            KAROKHIL
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5,  1] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: 1 }}
              className="text-yellow-600 font-bold text-6l bottom-9 md:text-6xl md:bottom-11 md:right-9 right-10 lg:text-7xl relative lg:bottom-14 lg:right inline-block"
            >
              +
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 sm:mt-4"
          >
            <TypeAnimation
              className="text-yellow-600 font-poppins leading-snug
                         text-[clamp(14px,4vw,22px)] md:text-[clamp(18px,2.5vw,28px)]"
              sequence={[
                "FRONT-END DEVELOPER...",
                1000,
                "BACK-END DEVELOPER...",
                1000,
                "UI/UX DESIGNER...",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

