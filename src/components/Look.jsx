import { useState, useEffect} from 'react'
import '../CSS/Look.css'
import { importImagesFrom } from './GlobalFunctions.jsx'
import { useStore } from "./Store.jsx";

export default function Look() {
    const BackGroundProjects = importImagesFrom('Projects/Creative/ImagesPrezent');
    const jakiObrazLook = useStore((s) => s.jakiObrazLook);
    const setJakiObrazLook = useStore((s) => s.setJakiObrazLook);
    const [widocznosc, setwidocznosc] = useState(false)

    useEffect(() => {
        if (jakiObrazLook != null) {
            setwidocznosc(true);
        }
    }, [jakiObrazLook]);

    const sprawdzenie = (dir) => {
    const next =
        (jakiObrazLook + dir + BackGroundProjects.length) %
        BackGroundProjects.length;
        setJakiObrazLook(next);
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

