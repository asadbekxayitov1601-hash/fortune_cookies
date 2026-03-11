import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FortuneCookie = ({ status, onClick }) => {
  const isCracked = status !== 'initial';

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer w-64 h-64"
      onClick={status === 'initial' ? onClick : undefined}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={status === 'initial' ? {
          y: [-10, 10, -10],
          rotate: [-2, 2, -2]
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        {/* Left half of cookie */}
        <motion.div
          animate={isCracked ? { x: -80, rotate: -15, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute origin-bottom-right"
          style={{ 
            width: '120px', 
            height: '100px',
            backgroundColor: '#fbbf24', // Amber 400
            borderTopLeftRadius: '100px',
            borderBottomLeftRadius: '100px',
            borderRight: '2px solid #b45309', // Dark amber accent line
            boxShadow: 'inset 10px 10px 20px rgba(255, 255, 255, 0.4), inset -5px -5px 15px rgba(0,0,0,0.1)'
          }}
        />

        {/* Right half of cookie */}
        <motion.div
          animate={isCracked ? { x: 80, rotate: 15, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute origin-bottom-left"
          style={{ 
            width: '120px', 
            height: '100px',
            backgroundColor: '#fcd34d', // Amber 300
            borderTopRightRadius: '100px',
            borderBottomRightRadius: '100px',
            left: '50%',
            boxShadow: 'inset -10px 10px 20px rgba(255, 255, 255, 0.4), inset 5px -5px 15px rgba(0,0,0,0.1)'
          }}
        />
        
        {/* Sparkles around the cookie when initial */}
        {!isCracked && (
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="absolute top-4 left-4 text-fortune-orange w-5 h-5" />
            <Sparkles className="absolute bottom-10 right-8 text-yellow-500 w-4 h-4" />
            <Sparkles className="absolute top-1/2 -right-4 text-orange-400 w-6 h-6" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default FortuneCookie;
