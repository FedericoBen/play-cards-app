import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { PlayCardsApp } from './PlayCardsApp'
import { ThemeProvider } from '@mui/system'
import { CssBaseline } from '@mui/material'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <PlayCardsApp />
    </ThemeProvider>
  // {/* </React.StrictMode> */}
)
