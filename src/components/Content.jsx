import { motion } from "framer-motion"
import '../CSS/Content.css'
import { importImagesFrom } from './Entry.jsx'

export default function Content() {
  const images = importImagesFrom('IconTools');

  const tekst = [
    "Programowaniem zajmuję się od ponad dwóch lat. Tworzę nowoczesne, responsywne i zoptymalizowane strony internetowe,",
    "Stale rozwijam swoje umiejętności i chętnie podejmuję się nowych wyzwań zarówno w web developmencie,",
    "jak i przy projektach kreatywnych, takich jak tworzenie gier czy grafika 3D."];

  return (
    <>
    <div className='mainContent'>
      {<motion.div
        className='omnie'
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
      <h1>O mnie</h1>
      <p style={{fontWeight: "bold"}}>Cześć, mam na imię Mikołaj</p>
          {tekst.map((t, i) => (
          <motion.p
            key = {i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 + 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
          {t}
          </motion.p>
          ))}
      <p style={{ fontWeight: "bold" }}>HTML • CSS • JavaScript • React • PHP • Unity • Blender</p>
      </motion.div>}
      <div className='znaczniki'>
          <motion.div className='przesuwacz'>
            {images.map((src, i) => (
              <div className='znacznik' key={i}>
                <img src={src} alt="" />
              </div>
            ))}
            {images.map((src, i) => (
              <div className='znacznik' key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </motion.div>
      </div>
    </div>
    {/* <div className='obszar'></div> */}
    </>
  )
}