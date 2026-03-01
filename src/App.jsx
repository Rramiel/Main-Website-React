import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import Entry from './components/Entry.jsx'
import Menu from './components/SideMenu.jsx'
import Content from './components/Content.jsx'
import Projects from './components/Dev.jsx'
import Creative from './components/Creative.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Entry />
    <Content />
    <Projects />
    <Creative />
  </StrictMode>,
)
