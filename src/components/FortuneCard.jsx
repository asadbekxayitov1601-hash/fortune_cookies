import React from 'react';
import { motion } from 'framer-motion';

const FortuneCard = ({ fortune, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="bg-white rounded-2xl p-8 max-w-md w-full shadow-soft border border-orange-100 flex flex-col items-center justify-center space-y-8 relative overflow-hidden"
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-fortune-yellow rounded-tl-2xl opacity-50 m-2"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-fortune-yellow rounded-br-2xl opacity-50 m-2"></div>

      <div className="text-center z-10 px-4">
        <h3 className="font-serif italic text-2xl md:text-3xl text-fortune-brown mb-6 leading-relaxed">
          "{fortune.quote}"
        </h3>
        
        <div className="py-6 border-t border-orange-100 w-full flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold mb-3">
            Lucky Numbers
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {fortune.luckyNumbers.map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                className="w-10 h-10 rounded-full bg-fortune-orange text-white flex items-center justify-center font-bold text-lg shadow-md"
              >
                {num}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="mt-4 px-8 py-3 bg-fortune-yellow text-fortune-brown font-semibold rounded-full shadow-sm hover:shadow-md transition-shadow active:bg-yellow-500"
      >
        Get Another Fortune
      </motion.button>
    </motion.div>
  );
};

export default FortuneCard;
