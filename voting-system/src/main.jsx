import { StrictMode } from 'react'
import { MantineProvider } from '@mantine/core'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>,
)
