import { useState } from 'react'
import { createCustomTheme, Theme } from '../init/theme'

export const useCustomTheme = (): {
  mode: 'light' | 'dark'
  toggleColorMode: () => void
  theme: Theme
} => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleColorMode = (): void => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  const theme: Theme = createCustomTheme(mode)

  return {
    mode,
    theme,
    toggleColorMode,
  }
}
