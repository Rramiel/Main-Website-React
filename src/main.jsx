import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import Entry from './Entry.jsx'
import Menu from './SideMenu.jsx'
import Content from './Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Entry />
    <Content />
  </StrictMode>,
)
