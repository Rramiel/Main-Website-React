import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import '../CSS/Creative.css'
import { importImagesFrom } from './GlobalFunctions.jsx'

export default function Creative() {
  const icon = importImagesFrom('Projects/Creative/Icon');
  const BackGroundProjects = importImagesFrom('Projects/Creative/BackGround');
  const ImagesPrezent = importImagesFrom('Projects/Creative/ImagesPrezent');

  let [licznik, setLicznik] = useState(0);
  const CZAS = 10000; 
  const KROK = 50; 

  const [progress, setProgress] = useState(0);
  let [elapsed, setElapsed] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const blokada = useRef(false);

  let tekst = [
    <>
    <h1>Mało</h1>
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
    <h1>Średnio</h1>
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
    <h1>Wysoko</h1>
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
          // setIsVisible(true);
          // setElapsed(0);
          // setProgress(0);
          }}
          onViewportLeave={() => {
          // setIsVisible(false);
          }}
         >
          <div className="backgroundImageCreative" style={{background: `url(${BackGroundProjects[licznik]})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
          <div className="backgroundCreativeGradient"></div>

          {/* <div className="textPlacementCreative">
            <div className="descriptionCreative">
              {tekst[licznik]}
            </div>
          </div>

          <div className='imagesCreative'>
              {images.slice(startIndex, endIndex).map((src, i) => (
                <img src={src} key={startIndex + i} alt="prace" className="image" onClick={() => handleClick(startIndex + i)} style={{zIndex: i + 1, left: - (2 + i * 4) + "vw", top: (2 + i * 4) + "vh"}}/>
              ))}
          </div> */}

          <div className='placementCreativeElemets'>
              <div className='left'>
                <div className="descriptionCreative">
                  {tekst[licznik]}
                </div>
              </div>
              <div className='right'>
                <div className='imagesCreative'>
                  {images.slice(startIndex, endIndex).map((src, i) => (
                  <img src={src} key={startIndex + i} alt="prace" className="image" onClick={() => handleClick(startIndex + i)} style={{zIndex: i + 1, right: (2 + i * 4) + "vw", top: (2 + i * 4) + "vh"}}/>
                ))}
                </div>
              </div>
          </div>

        </motion.div>

        <div className="lista">
          <div className="programy">
            {icon.map((src, i) => (
                <img src={src} alt="ikony" key={i} onClick={() => setLicznik(i)}/>
            ))}
            <div className='locationArrow' style={{ left: `calc(80px + ${licznik} * (100px + 20px))` }}>
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}