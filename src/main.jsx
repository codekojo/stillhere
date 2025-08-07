import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/fonts.css'
import './styles/variables.css'
import './styles/typography.css'
import './styles/iconography.css'
import './styles/layout.css'
import './styles/exhibition.css'
import './styles/logo.css'
import './styles/exhibition-info.css'
import './styles/media-coverage.css'
import './styles/poetry-section.css'
import './styles/partners-section.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
