import  React from 'react'
import reactDOM  from 'react-dom/client'
import { App } from './App.tsx'

reactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
