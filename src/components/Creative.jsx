import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import '../CSS/Creative.css'
import { importImagesFrom } from './GlobalFunctions.jsx'

export default function Creative() {
  const images = importImagesFrom('Projects/Creative/Icon');
  const BackGroundProjects = importImagesFrom('Projects/Creative/BackGround');

  let [licznik, setLicznik] = useState(0);
  const CZAS = 10000; 
  const KROK = 50; 

  const [progress, setProgress] = useState(0);
  let [elapsed, setElapsed] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const blokada = useRef(false);

  let tekst = [
    <>
    <h1>Photoshop</h1>
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
    <h1>Premiere Pro</h1>
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
    <h1>After Effect</h1>
    <p>Gra stworzona dla żartu, która została wydana na 
    <a style={{color: "red"}} href="https://rramiel.itch.io/flappy-snax-3d"> Itch.io </a> 
    więc każdy może zagrać w to cudo.
    To zwykły klon Flappy Birda, tyle że w 3D i z głową Snaxa zamiast ptaka.
    Posiada już wszystkie fundamentalne mechaniki, więc jest w pełni grywalna.</p>
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


  return (
    <>
      <div className="ProjectsCreative">
        <motion.div
         className="backgroundCreative"
          key={licznik}
          initial={{ opacity: 0, y:5, rotate:-3 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          onViewportEnter={() => {
          // setIsVisible(true);
          // setElapsed(0);
          // setProgress(0);
          }}
          onViewportLeave={() => {
          // setIsVisible(false);
          }}
         >
          <div className="backgroundImage" style={{background: `url(${BackGroundProjects[licznik]})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
          <div className="backgroundCreativeGradient"></div>
          <div className="TextCreative">
            <div className="DescriptionCreative">
              {tekst[licznik]}
            </div>
          </div>

          <div className='imageCreative'>
            <div className="image" style={{zIndex: "3", backgroundColor: "blue", width: "300px", height: "260px"}}></div>
            <div className="image" style={{zIndex: "2", backgroundColor: "red", width: "320px", height: "280px"}}></div>
            <div className="image" style={{zIndex: "1", backgroundColor: "black", width: "330px", height: "300px"}}></div>
          </div>

        </motion.div>

        <div className="lista">
          <div className="programy">
            {images.map((src, i) => (
                <img src={src} alt="ikony" onClick={() => setLicznik(i)}/>
            ))}
            <div className='locationArrow' style={{ left: `calc(70px + ${licznik} * (100px + 20px))` }}>
              <i class="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}