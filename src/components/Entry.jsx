import { useState, useEffect } from 'react'
import '../CSS/Entry.css'
import sonic from '../assets/EasterEgg/sonic.gif'
import { motion } from "framer-motion";

export function importImagesFrom(folder) {
  const all = {
    BackGround: import.meta.glob('/src/assets/BackGround/*.{jpg,png,jpeg}', {eager: true}),
    IconTools: import.meta.glob('/src/assets/IconTools/*.{jpg,png,jpeg,svg,gif}', { eager: true }),
    BackGroundProjects: import.meta.glob('/src/assets/Projects/BackGroundProjects/*.{jpg,png,jpeg,svg,gif}', { eager: true }),
    Mascot: import.meta.glob('/src/assets/Projects/Mascot/*.{jpg,png,jpeg,svg,gif}', { eager: true })
  };
  const images = all[folder] || {};
  return Object.values(images).map((modules) => modules.default);
}

export default function Entry() {
  const images = importImagesFrom('BackGround');
  const [photoIndex, setPhotoIndex] = useState(Math.floor(Math.random() * images.length));
  const [bgPosition, setBgPosition] = useState({ x: 50, y: 50 });
  const [run, setRun] = useState(false);

  const tekst = ["Witam na", "mojej stronie... "]

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setBgPosition({ x: 50 + x, y: 50 + y });
    };

      const updateListener = () => {
      if (window.innerWidth >= 1100) {
        window.addEventListener("mousemove", handleMouseMove);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        setBgPosition({ x: 50, y: 50 });
      }
    };

    updateListener();
    window.addEventListener("resize", updateListener);

    return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", updateListener);
  };
  }, []);

  useEffect(() => {
    const invertal = setInterval(() => {
      setRun(prev => !prev);
    }, 10000)
    return () => clearInterval(invertal);
  }, []);

  useEffect(() => {
    const invertal = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % images.length);
    }, 15000);
    return () => clearInterval(invertal);
  }, [images.length]);

  return (
    <>
    <div className="page">
      {images.map((src, i) => (
        <div 
        key={i}
        className='page-bg'
        style={{
          backgroundImage: `url(${src})`,
          opacity: i === photoIndex ? 1 : 0,
          zIndex: i === photoIndex ? -1 : -2,
          backgroundPosition: `${bgPosition.x}% ${bgPosition.y}%`,
        }}
        />
      ))}
    </div>
    <div className='informujacy'>
      <div className='napisy'>
        {tekst.map((t, i) => (
          <motion.h1
          key = {i}
          initial={{ opacity: 0 , y: 250, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.3, duration: 1, ease: "easeOut" }}
          >
          {t}
          </motion.h1>
        ))}
      </div>
      <div className='sonic' style={{transform: run ? "translateX(100%)" : "translateX(-300px)",transition: run ? "1s linear" : "0s"}}>
        <img src={sonic} alt="sonic" />
      </div>
    </div> 
    </>
  )
}

