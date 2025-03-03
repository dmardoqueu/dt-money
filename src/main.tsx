import  React from 'react'
import { StrictMode } from 'react'
import reactDOM  from 'react-dom/client'
import { App } from './App.tsx'

reactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
