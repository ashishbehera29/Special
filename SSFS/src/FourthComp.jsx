import { useState } from "react";
import { motion } from "framer-motion";

const FourthComp = () => {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col justify-center items-center min-h-screen bg-pink-200 p-6 rounded-md shadow-lg overflow-hidden"
    >
     
      <img
        src="/flag.png"
        alt="Left Image"
        className="absolute -top-25 -left-10 w-140 h-140 transform rotate-305"
      />

      <img
        src="/flag.png"
        alt="Right Image"
        className="absolute -top-20 -right-15 w-140 h-140 transform rotate-15"
      />

      
      {!showLetter ? (
        <motion.button
          onClick={() => setShowLetter(true)}
          className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-md shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Open Letter Pad ✉️
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md text-center"
        >
          <h2 className="text-xl font-semibold text-gray-700">A Special Message for You 💌</h2>
          <p className="mt-4 text-gray-600">
          Dearest AA ❤️,
           Happy Birthday! 🎂✨   <br />
           Today is your special day, and I want to start by wishing you all the happiness in the world.
           I know a simple wish can’t make up for all the moments I messed up
           but today, I just want to say that no matter how much time has passed, my feelings for you have never changed. I still think about you and with every thought comes the regret of losing you—of losing us.
           And the hardest part is knowing that it was my fault. I wish I could go back, fix my mistakes, and hold onto you tighter instead of letting you slip away.
           Your happiness means everything to me, even if I’m no longer the one who gets to share it with you.
           I’ll always hold onto the hope that one day, we can reconnect
           You deserve happiness, and whether I am a part of that or not, I will always care for you, respect you, and silently hope for your smile. If there’s ever a way to make things right, to mend what’s broken, I would do it without a second thought.

Enjoy your day, Wishing you all the happiness in the world, Akanshya. You deserve nothing less.❤️

With all my love,
Ashish
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FourthComp;
