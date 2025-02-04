import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  const floatingObjects = Array.from({ length: 180 }).map((_, index) => ({
    id: index,
    x: `${Math.random() * 100}vw`,
    duration: 13,
    delay: 1 + Math.random() * 5,
  }));

  if (isLoading) {
    return (
      <div className="loading-screen flex justify-center items-center min-h-screen bg-pink-200">
        <div className="flex items-center space-x-4">
          <motion.img
            src="/cake.gif"
            alt="Birthday Cake"
            className="w-20 h-20"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="text-3xl font-bold text-pink-500">Getting the Party Ready...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-screen overflow-hidden bg-pink-200 text-center p-6 bg-[url('/8935717.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Background Music */}
      <audio autoPlay loop controls={false}>
        <source src="/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>

      {floatingObjects.map((obj) => (
        <motion.img
          key={obj.id}
          src="/Object.png"
          alt="Floating Object"
          className="absolute w-30 h-40 z-20"
          style={{ left: obj.x }}
          initial={{ y: "100vh" }}
          animate={{ y: "-100vh" }}
          transition={{
            duration: obj.duration,
            delay: obj.delay,
            ease: "easeInOut",
          }}
          loading="lazy"
        />
      ))}

      <motion.img
        src="/b1.png"
        alt="Balloon"
        className="absolute w-60 h-60"
        style={{ left: "5%", top: "10%" }}
        animate={{
          y: [-20, 20, -20],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        loading="lazy"
      />

      <motion.img
        src="/b1.png"
        alt="Balloon"
        className="absolute w-50 h-50"
        style={{ right: "5%", bottom: "10%" }}
        animate={{
          y: [-20, 20, -20],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        loading="lazy"
      />

      <motion.img
        src="/STAR1.png"
        alt="Star"
        className="absolute w-40 h-40"
        style={{ right: "30%", top: "20%" }}
        animate={{
          rotate: [0, 5, -5, 0],
          y: [-10, 10, -10],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        loading="lazy"
      />

      <img
        src="/flag.png"
        alt="Left Image"
        className="absolute -top-0 -left-30 w-154 h-95 transform rotate-300"
        loading="lazy"
      />

      <img
        src="/flag.png"
        alt="Right Image"
        className="absolute -top-5 -right-20 w-154 h-95 transform rotate-5"
        loading="lazy"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/cake.gif"
          alt="Background GIF"
          className="absolute w-[20%] h-[40%] top-[320px] bottom-[50px]"
          loading="lazy"
        />
      </div>

      <h1 className="custom-font text-5xl md:text-7xl font-bold text-gray-800 top-[-150px] bottom-[50px] merry-loves w-[90%] md:w-[60%] drop-shadow-xl z-10 relative">
        Happy Birthday <br />
        <span className="text-pink-500">Akankshya</span> <br />
      </h1>

      <div className="absolute bottom-5 z-20">
        <button
          onClick={() => navigate("/i")}
          className="bg-pink-500 text-white font-bold text-xl px-7 py-3 rounded-lg shadow-2xl hover:bg-pink-600 transition-all duration-300"
        >
          A Special Message is Waiting For You!!
        </button>
      </div>
    </div>
  );
}

export default Home;

