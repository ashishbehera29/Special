import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SecondComponent() {
  const navigate = useNavigate();
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showSurpriseButton, setShowSurpriseButton] = useState(false);

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


    
      <motion.img
        src="/Layer_1.png"
        alt="First Image"
        className="mt-6 w-120 h-120"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {showSecondImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 10 }}
        >
          <img
            src="/Frame 1.png"
            alt="Second Image"
            className="absolute top-[27%] left-[43%] transform -translate-x-1/2 w-50 h-80"
          />
        </motion.div>
      )}

     
      {!showSurpriseButton ? (
        <button
          onClick={() => {
            setShowSecondImage(true);
            setTimeout(() => setShowSurpriseButton(true), 1000); // Delay before showing next button
          }}
          className="mt-4 px-6 py-3 text-white bg-pink-500 rounded-md shadow-lg z-20"
        >
         I'd love to spend your birthday with you—may I sit with you?
        </button>
      ) : (
        <p className="mt-4 text-lg font-semibold text-blue-600">
          🎉 Happy Birthday Akankshya! 🎂🎈
        </p>
      )}

      
      {showSurpriseButton && (
        <button
          onClick={() => navigate("/love")}
          className="mt-4 px-6 py-3 text-white bg-pink-500 rounded-md shadow-lg z-20"
        >
            Message waiting!
        </button>
      )}
    </motion.div>
  );
}

export default SecondComponent;
