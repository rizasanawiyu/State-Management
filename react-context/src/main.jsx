import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { VoteProvider } from './contexts/VoteContext.jsx'
import { ToDoItemProvider } from './contexts/ToDoItemContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VoteProvider>
      <ToDoItemProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToDoItemProvider>
    </VoteProvider>
  </StrictMode>,
)
