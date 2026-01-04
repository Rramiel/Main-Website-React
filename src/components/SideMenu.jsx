import { useState } from 'react'
import '../CSS/SideMenu.css'

export default function SideMenu() {
  const [Extended, setExtended] = useState(false);
  const speedIncrement = 0.15;
  const baseSpeed = 0.5;

  const linksMini = [
    {name: "OMnie", src: "https://helter.ct.ws/?i=1"},
    {name: "Projekty", src: "https://helter.ct.ws/?i=1"},
    {name: "Plany", src: "https://helter.ct.ws/?i=1"},
    {name: "SocialMedia", src: "https://helter.ct.ws/?i=1"},
  ];
  const linksHidden = [
    {name: "Główna", src: "https://helter.ct.ws/?i=1", marker: "fa-solid fa-house"},
    {name: "Sklepik", src: "https://helter.ct.ws/?i=1", marker: "fa-solid fa-cart-shopping"},
    {name: "Kontakt", src: "https://helter.ct.ws/?i=1", marker: "fa-solid fa-phone"},
    {name: "Powiadomienia", src: "https://helter.ct.ws/?i=1", marker: "fa-solid fa-bell"},
    {name: "Muzyka", src: "https://helter.ct.ws/?i=1", marker: "fa-solid fa-music"},
    {name: "Gry", src: "https://helter.ct.ws/?i=1", marker: "fa-solid fa-gamepad"},
  ];
  
  const Change = () => {
    setExtended(prev => !prev); 
  };

  return (
    <>
      <div className='menu' style={{transform: Extended ? "translateX(0%)" : "translateX(-100%)"}}>

          <div className={Extended ? "miniMenuHidden" : "miniMenuShow"}>
          <div className={Extended ? "strzalkaHidden" : "strzalkaShow"} onClick={Change}>
            <i className={`fa-solid fa-arrow-${Extended ? "left" : "right"}`} id="strzalka"></i>
          </div>
          <div className='linki'>
            {linksMini.map((link, index) => (
              <a 
              key = {index}
              href = {link.src}
              style = {{
                transform: Extended ? "translateY(150%)" : "translateY(0%)",
                transition: `${baseSpeed + index * speedIncrement}s`,
              }}
              >
              {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className='bodyMenu'>
          <div className='hiddenContent'>
            <div className='nameWebsite'>
              <h1>Helter</h1>
              <p>--linki--</p>
            </div>
            <div className='zbior'>
              {linksHidden.map((link, index) => (
                <div className='element' key = {index} style={{
                  transform: Extended ? "translateX(0%)" : "translateX(-150%)",
                  transition: `${baseSpeed + index * speedIncrement}s`,
                }}>
                <i className={link.marker}></i>
                <a
                key = {index}
                href = {link.src}
                >
                {link.name}
                </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
 }
