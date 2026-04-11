import { useState, useEffect, useContext } from 'react'
import '../CSS/Look.css'
import { GlobalContext } from "./GlobalState";
import { importImagesFrom } from './GlobalFunctions.jsx'

export default function Look() {
    const BackGroundProjects = importImagesFrom('Projects/Creative/ImagesPrezent');
    const { jakiObrazLook, setJakiObrazLook } = useContext(GlobalContext);
    const [widocznosc, setwidocznosc] = useState(false)

    useEffect(() => {
        setwidocznosc(true);
    }, [jakiObrazLook]);

    const sprawdzenie = (dir) => {
    setJakiObrazLook(prev => {
      const next = prev + dir;
      if (next >= BackGroundProjects.length) return 0;
      if (next < 0) return BackGroundProjects.length - 1;
      return next;
    });
    };

    return (
        <>
            <div className='menuZdjeciowe' style={{display: widocznosc ? "flex" : "none"}}>
                <div className='powrot' onClick={() => setwidocznosc(prev => !prev)}></div>
                <img className='wystawione' src={BackGroundProjects[jakiObrazLook]} alt="ss" onClick={(e) => e.stopPropagation()} />

                <div className='arrowsLook'>
                    <span className='leftArrowLook'>
                        <i className='fa-solid fa-arrow-left' 
                        onClick={() => { sprawdzenie(-1);}} 
                        // onMouseEnter={() => {setStopTime(true)}} onMouseLeave={() => {setStopTime(false)}}
                        ></i>
                    </span>
                    <span className='rightArrowLook'>
                        <i className='fa-solid fa-arrow-right' 
                        onClick={() => { sprawdzenie(1);}} 
                        // onMouseEnter={() => {setStopTime(true)}} onMouseLeave={() => {setStopTime(false)}}
                        ></i>
                    </span>
                </div>
            </div>
        </>
    )
}

