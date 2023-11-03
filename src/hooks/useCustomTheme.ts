import { useState } from 'react'
import { createCustomTheme } from '../init/theme'

export const useCustomTheme = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleColorMode = (): void => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  const theme = createCustomTheme(mode)

  return {
    mode,
    toggleColorMode,
    theme,
  }
}
