import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import '../CSS/Projects.css'
import { importImagesFrom } from './Entry.jsx'
import unity from '../assets/Projects/Icon/unity.png'
import blender from '../assets/Projects/Icon/blender.png'
import voxel from '../assets/Projects/Icon/MagicalVoxel.png'

export default function Projects() {
  const BackGroundProjects = importImagesFrom('BackGroundProjects');
  const Mascot = importImagesFrom('Mascot');
  let [licznik, setLicznik] = useState(0);
  const CZAS = 10000; 
  const KROK = 50; 

  const [progress, setProgress] = useState(0);
  let [elapsed, setElapsed] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  let tekst = [
    <>
    <h1>Revnel Project</h1>
      <p>Gra inspirowana <span style={{color: "red"}}>SCP-3008. </span>
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
    <a style={{color: "red"}} href="https://rramiel.itch.io/revnel-project"> Itch.io </a> 
    więc każdy może zagrać w to cudo.
    To zwykły klon Flappy Birda, tyle że w 3D i z głową Snaxa zamiast ptaka.
    Posiada już wszystkie fundamentalne mechaniki, więc jest w pełni grywalna.</p>
    </>
  ];
  let narzedzia = [
    <>
    <img src={unity} alt="unity" />
    <img src={blender} alt="blender" />
    </>,
    <>
    <img src={unity} alt="unity" />
    <img src={voxel} alt="voxel" />
    </>,
    <>
    <img src={unity} alt="unity" />
    <img src={blender} alt="blender" />
    </>
  ]

  const sprawdzenie = (dir) => {
  setLicznik(prev => {
      const next = prev + dir;

      if (next >= tekst.length) return 0;
      if (next < 0) return tekst.length - 1;

      return next;
    });
  };

  const blokada = useRef(false);

  useEffect(() => {
    if (!isVisible) return;

    blokada.current = false;

    const interval = setInterval(() => {
      setElapsed(prev => {
        const next = prev + KROK;

        setProgress((next / CZAS) * 100);

        if (next >= CZAS && !blokada.current) {
          blokada.current = true;
          sprawdzenie(1);
          setProgress(0);
          return 0;
        }

        return next;
      });
    }, KROK);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <>
    <div className="projektyDev">

      <motion.div 
        className='tlo'
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

        <div className="tlo-obraz" style={{background: `url(${BackGroundProjects[licznik]})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className="tlo-gradient"></div>
        
        <motion.img 
        className='obraz' src={Mascot[licznik]} alt="maskotka" 
        key={licznik}
        initial={{ opacity: 0, y:50, rotate:3 }}
        whileInView={{ opacity: 1, y:5 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        />

        <span className='postep' style={{background: `linear-gradient(to right, white ${progress - 10}%, transparent ${progress + 10}%)`}}></span>

        <div className='odbicie'>
          <div className='opis'>
            {tekst[licznik]}
            <div className='narzedzia'>
              {narzedzia[licznik]}
            </div>
          </div>
        </div>
      </motion.div>
        <div className='strony'>
          {tekst.map((_, i) => (
            <div
              key={i}
              className="kropka"
              style = {{backgroundColor: licznik == i ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.15)", cursor: licznik == i ? "auto" : "pointer"}}
              onClick={() => setLicznik(i)}
            >
              
            </div>
          ))}
        </div>
        <div className='strzalki'>
          <span className='lewo'>
            <i className='fa-solid fa-arrow-left' onClick={() => { sprawdzenie(-1); setElapsed(0);}}></i>
          </span>
          <span className='prawo'>
            <i className='fa-solid fa-arrow-right' onClick={() => { sprawdzenie(1); setElapsed(0);}}></i>
          </span>
        </div>
    </div>
    </>
  )
 }