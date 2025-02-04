import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ThirdComponent = () => {
  const navigate = useNavigate();
  const [showYesButton, setShowYesButton] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "50%", left: "50%" });

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowYesButton(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

 
  const moveNoButton = () => {
    const randomX = Math.random() * 80 + 10; 
    const randomY = Math.random() * 80 + 10; 

    setNoButtonPosition({
      top: `${randomY}%`,
      left: `${randomX}%`,
    });
  };

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

    
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-semibold text-center mb-6 text-gray-800"
      >
        Want to check out the Message?
      </motion.h1>

      <p className="text-lg text-center mb-4 text-gray-700">
        {showYesButton
          ? "You tried a lot, Akankshya! So here's something special for your efforts. 🎁"
          : "I know you hate me and want to click 'No' 😢, so go with NO!"}
      </p>

    
      <motion.button
        onMouseEnter={moveNoButton}
        className="absolute px-6 py-3 text-white bg-red-500 rounded-md shadow-lg"
        style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
      >
        No
      </motion.button>

      <audio autoPlay loop controls={false}>
        <source src="/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>

      {showYesButton && (
        <motion.button
          onClick={() => navigate("/you")} 
          className="mt-6 px-6 py-3 text-white bg-green-500 rounded-md shadow-lg"
        >
          Yes
        </motion.button>
      )}
    </motion.div>
  );
};

export default ThirdComponent;
