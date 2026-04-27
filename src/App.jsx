import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import Entry from './components/Entry.jsx'
import Menu from './components/SideMenu.jsx'
import Content from './components/Content.jsx'
import Projects from './components/Dev.jsx'
import Creative from './components/Creative.jsx'
import Look from './components/Look.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Look />
    <Menu />
    <Entry />
    <Content />
    <Projects />
    <Creative />
    <Footer />
  </>,
)
