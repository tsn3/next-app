import { createTheme, Theme as MuiTheme } from '@mui/material/styles'
import { getDesignTokens } from './getDesignTokens'

export interface Theme extends MuiTheme {
  mode: 'light' | 'dark'
  direction: 'ltr' | 'rtl'
}

export const createCustomTheme = (mode: 'light' | 'dark'): Theme => {
  const designTokens = getDesignTokens(mode)
  return createTheme(designTokens) as Theme
}
