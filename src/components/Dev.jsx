import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import '../CSS/Dev.css'
import { importImagesFrom } from './GlobalFunctions.jsx'

export default function Projects() {
  const BackGroundProjects = importImagesFrom('Projects/Dev/BackGround');
  const Mascot = importImagesFrom('Projects/Dev/Mascot');
  const Icons = importImagesFrom('Projects/Dev/Icon');
  let [licznik, setLicznik] = useState(0);
  const CZAS = 10000; 
  const KROK = 50; 

  const [progress, setProgress] = useState(0);
  let [elapsed, setElapsed] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [StopTime, setStopTime] = useState(false);

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

  const blokada = useRef(false);

  let tekst = [
    <>
    <h1>Revnel Project</h1>
      <p>Gra inspirowana <span><a href='https://scp-wiki.wikidot.com/scp-3008' style={{color: "red"}}>SCP-3008.</a></span>
        <br></br>
        Gdzie musisz uciec z nieskończonego sklepu,
        zbierając przedmioty, zanim skończy się czas,
        i unikając pracowników. Po upływie czasu zrobi się krwawo.
        Gra jest dostępna na
        <a style={{color: "red"}} href="https://rramiel.itch.io/revnel-project"> Itch.io</a>,
        znajduje się również jej dalszy opis. Nad grą pracuję do tej pory.
      </p>
    </>,
    <>
    <h1>Super Mario Bros Remake</h1>
      <p>Dosłowny klon Super Mario Bros.
        <br></br>
        Choć nie udało mi się zrealizować wszystkiego zgodnie z założeniami,
        projekt znacznie rozwinął moje umiejętności. Przerwałem nad nim prace
        z powodu mojego zarządzania kodem. Proces tworzenia
        nagrałem na
        <a style={{color: "red"}} href="https://www.youtube.com/watch?v=KokzE2PPRuQ"> YouTube</a>
        , natomiast samego projektu nie udostępniam ze względu na prawa autorskie.
      </p>
    </>,
    <>
    <h1>Flappy Snax 3D</h1>
    <p>Gra stworzona dla żartu, która została wydana na 
    <a style={{color: "red"}} href="https://rramiel.itch.io/flappy-snax-3d"> Itch.io </a> 
    więc każdy może zagrać w to cudo.
    To zwykły klon Flappy Birda, tyle że w 3D i z głową Snaxa zamiast ptaka.
    Posiada już wszystkie fundamentalne mechaniki, więc jest w pełni grywalna.</p>
    </>
  ];
  let narzedzia = [
    <>
    <img src={Icons[1]} alt="unity" />
    <img src={Icons[0]} alt="blender" />
    </>,
    <>
    <img src={Icons[1]} alt="unity" />
    <img src={Icons[2]} alt="voxel" />
    </>,
    <>
    <img src={Icons[1]} alt="unity" />
    <img src={Icons[0]} alt="blender" />
    </>
  ]

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

  return (
    <>
    <div className="projectDev">

      <motion.div 
        className='backgroundDev'
        key={licznik}
        initial={{ opacity: 0, y:5, rotate:3 }}
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

        <div className="backgroundImageDev" style={{background: `url(${BackGroundProjects[licznik]})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className="backgroundGradientDev"></div>
        
        <motion.img 
        className='mascotDev' src={Mascot[licznik]} alt="maskotka" 
        key={licznik}
        initial={{ opacity: 0, y:50, rotate:3 }}
        whileInView={{ opacity: 1, y:5 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        />

        <span className='progressBarDev' style={{background: `linear-gradient(to right, white ${progress - 10}%, transparent ${progress + 10}%)`}}></span>

        <div className='textPlacementDev'>
          <div className='descriptionDev'>
            {tekst[licznik]}
            <div className='toolsDev'>
              {narzedzia[licznik]}
            </div>
          </div>
        </div>

      </motion.div>

        <motion.div 
        className='dotsDev'
        variants={floatingUiAnimation}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.15 }}
        >
          {tekst.map((_, i) => (
            <div
              key={i}
              className={`dotDev ${licznik === i ? "active" : ""}`}
              onClick={() => {setLicznik(i); setStopTime(false)}}
              onMouseEnter={() => {licznik === i ? setStopTime(false) : setStopTime(true)}}
              onMouseLeave={() => {setStopTime(false)}}
            >
            </div>
          ))}
        </motion.div>

        <motion.div className='arrowsDev'
        variants={floatingUiAnimation}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className='leftArrowDev'>
            <i className='fa-solid fa-arrow-left' onClick={() => { sprawdzenie(-1); setElapsed(0);}} onMouseEnter={() => {setStopTime(true)}} onMouseLeave={() => {setStopTime(false)}}></i>
          </span>
          <span className='rightArrowDev'>
            <i className='fa-solid fa-arrow-right' onClick={() => { sprawdzenie(1); setElapsed(0);}} onMouseEnter={() => {setStopTime(true)}} onMouseLeave={() => {setStopTime(false)}}></i>
          </span>
        </motion.div>

    </div>
    </>
  )
 }