'use client'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../init/theme'
import { CssBaseline, IconButton } from '@mui/material'
import { useState } from 'react'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined'
import { ColorModeContext } from './colorModeContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleColorMode = (): void => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <html lang='en' suppressHydrationWarning>
      <ColorModeContext.Provider value={{ mode, toggleMode: toggleColorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <body>
            <div>
              <IconButton onClick={toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                  <Brightness4OutlinedIcon />
                ) : (
                  <Brightness7OutlinedIcon />
                )}
              </IconButton>
              {mode === 'dark' ? 'Dark mode' : 'Light mode'}
            </div>
            {children}
          </body>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </html>
  )
}
