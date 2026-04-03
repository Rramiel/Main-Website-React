import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import '../CSS/Creative.css'
import { importImagesFrom } from './GlobalFunctions.jsx'

export default function Creative() {
  const icon = importImagesFrom('Projects/Creative/Icon');
  const BackGroundProjects = importImagesFrom('Projects/Creative/BackGround');
  const ImagesPrezent = importImagesFrom('Projects/Creative/ImagesPrezent');

  const [isBelow1100, setIsBelow1100] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsBelow1100(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let [licznik, setLicznik] = useState(0);
  const CZAS = 10000; 
  const KROK = 50; 

  const [progress, setProgress] = useState(0);
  let [elapsed, setElapsed] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [StopTime, setStopTime] = useState(false);

  const blokada = useRef(false);

  const floatingUiAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
    pointerEvents: "none",
  },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
  },
};

  let tekst = [
    <>
    <h1>Photoshop</h1>
      <p>
        Obróbką zdjęć i grafiką komputerową zajmuję się hobbystycznie,
        tworząc miniaturki na YouTube, grafiki na strony internetowe,
        plakaty inne projekty dostosowane do konkretnych potrzeb i estetyki.
        {/* <a style={{color: "red"}} href="https://rramiel.itch.io/revnel-project"> Itch.io</a>, */}
      </p>
    </>,
    <>
    <h1>Premiere Pro</h1>
      <p>
        Doświadczenie w obróbce wideo zdobyłem podczas prowadzenia własnego kanału na YouTube.
        Rozwijając swoje umiejętności, przeszedłem od podstawowego montażu do
        stosowania przejść, efektów wizualnych i dynamiki filmu.
      </p>
    </>,
    <>
    <h1>After Effects</h1>
    <p>
        After Effects poznaję od niedawna, stopniowo rozwijając swoje umiejętności w zakresie
        animacji i efektów wizualnych. Mimo że wciąż zdobywam doświadczenie,
        zrealizowałem już w tym programie pierwsze projekty.
    </p>
    </>
  ];

 const sprawdzenie = (dir) => {
    blokada.current = false;

    setLicznik(prev => {
      const next = prev + dir;
      if (next >= tekst.length) return 0;
      if (next < 0) return tekst.length - 1;
      return next;
    });
  };

  const canHover = window.matchMedia("(hover: hover)").matches;
  useEffect(() => {
    if (!isVisible) return;

    blokada.current = false;

    const interval = setInterval(() => {
      setElapsed(prev => {
        if (StopTime && canHover) return prev;

        const next = prev + KROK;
        setProgress((next / CZAS) * 100);

        if (next >= CZAS && !blokada.current) {
          blokada.current = true;
          sprawdzenie(-1);
          setProgress(0);
          return 0;
        }
        
        return next;
      });
    }, KROK);

    return () => clearInterval(interval);
  }, [isVisible, StopTime]);

  const startIndex = licznik * 3;
  const endIndex = startIndex + 3;

  

  const [images, setImages] = useState(ImagesPrezent);

  useEffect(() => {
  setImages(ImagesPrezent);
  }, [licznik]);

  const handleClick = (globalIndex) => {
  setImages(prev => {
    const next = [...prev];
    const topIndex = startIndex + 2;
    if (globalIndex === topIndex) return prev;

    [next[topIndex], next[globalIndex]] = [next[globalIndex], next[topIndex]];

    return next;
  });
};


  return (
    <>
      <div className="projectCreative">
        <motion.div
         className="backgroundCreative"
          key={licznik}
          initial={{ opacity: 0, y:5, rotate:-3 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          onViewportEnter={() => {
          setIsVisible(true);
          setElapsed(0);
          setProgress(0);
          }}
          onViewportLeave={() => {
          setIsVisible(false);
          }}
         >
          <div className="backgroundImageCreative" style={{background: `url(${BackGroundProjects[licznik]})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
          <div className="backgroundCreativeGradient"></div>
          <span className='progressBarCreative' style={{background: `linear-gradient(to right, white ${progress - 10}%, transparent ${progress + 10}%)`}}></span>

          <div className='placementCreativeElemets'>
              <div className='left'>
                <div className="descriptionCreative">
                  {tekst[licznik]}
                </div>
              </div>
              <div className='right'>
                <div className='imagesCreative'>
                  {images.slice(startIndex, endIndex).map((src, i) => (
                  <motion.img
                  key={startIndex + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (images.slice(startIndex, endIndex).length - i - 1) * 0.2 + 0.2, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  
                  src={src}  alt="prace" className="image2"
                  onClick={() => handleClick(startIndex + i)}
                  style={{zIndex: i + 1, right: (2 + i * 4) + "vw", top: (2 + i * 4) + "vh"}}/>
                ))}
                </div>
              </div>
          </div>
        </motion.div>

        

        <motion.div
         className="lista"
         variants={floatingUiAnimation}
         initial="hidden"
         animate={isVisible ? "visible" : "hidden"}
         transition={{ duration: 0.5, delay: 0.15 }}
         >
          <div className="programy" >
            {icon.map((src, i) => (
                <img src={src} alt="ikony" key={i} className={`program ${licznik === i ? "" : "chosen"}`} onClick={() => setLicznik(i)} onMouseEnter={() => {setStopTime(true)}} onMouseLeave={() => {setStopTime(false)}}/>
            ))}
            <div className='locationArrow' style={{left: isBelow1100 ? `calc(40px + ${licznik} * (80px + 20px))` : `calc(80px + ${licznik} * (100px + 20px))` }}>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </motion.div>
        
      </div>
    </>
  )
}