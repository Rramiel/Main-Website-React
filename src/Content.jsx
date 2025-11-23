import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import './CSS/Content.css'

export default function Content() {
  const tekst = [
    "Programowaniem zajmuję się od ponad dwóch lat. Tworzę wysokiej jakości, responsywne i zoptymalizowane strony.",
    "Mam duże doświadczenie i nieustannie poszerzam swoją wiedzę.",
    "Specjalizuję się w tworzeniu stron WWW z wykorzystaniem:"];

  return (
    <>
    <main>
      {<motion.div
        className='blok'
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
      <p style={{ fontWeight: "bold" }}>HTML, CSS, JavaScript i PHP</p>
      </motion.div>}
    </main>
    </>
  )
}