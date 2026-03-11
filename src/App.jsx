import React, { useState } from 'react';
import FortuneCookie from './components/FortuneCookie';
import FortuneCard from './components/FortuneCard';
import { getRandomFortune } from './data/fortunes';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [status, setStatus] = useState('initial'); // 'initial', 'cracking', 'revealed'
  const [currentFortune, setCurrentFortune] = useState(null);

  const handleCrack = () => {
    if (status !== 'initial') return;
    setStatus('cracking');
    setCurrentFortune(getRandomFortune());
    
    // After 1 second animation and loading, reveal the card
    setTimeout(() => {
      setStatus('revealed');
    }, 1200);
  };

  const handleReset = () => {
    setStatus('initial');
    setCurrentFortune(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Title section */}
      <AnimatePresence>
        {status !== 'revealed' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="text-center mb-16 absolute top-20 flex flex-col items-center"
          >
            <h1 className="font-serif italic text-4xl md:text-5xl text-fortune-brown mb-3 tracking-wide drop-shadow-sm">
              Fortune Cookie
            </h1>
            <p className="text-orange-900/60 font-medium tracking-wide pb-1">
              Tap the cookie to crack it open!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interaction Area */}
      <div className="flex-1 flex items-center justify-center w-full max-w-2xl relative">
        <AnimatePresence mode="wait">
          {status !== 'revealed' ? (
            <motion.div 
              key="cookieContainer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center"
            >
              <FortuneCookie status={status} onClick={handleCrack} />
              
              {/* Optional Loading text if cracking */}
              <div className="h-8 mt-8">
                {status === 'cracking' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-fortune-orange font-medium animate-pulse"
                  >
                    Cracking open your fortune...
                  </motion.p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="cardContainer"
              className="w-full flex justify-center z-20"
            >
              <FortuneCard fortune={currentFortune} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Badge visible only in initial state */}
      <AnimatePresence>
        {status === 'initial' && (
           <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
           className="absolute bottom-10 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/60 text-fortune-brown font-medium text-sm text-center"
         >
           Magic awaits inside ✨
         </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
