import { createTheme } from '@mui/material/styles'
import { getDesignTokens } from './getDesignTokens'

export const createCustomTheme = (mode) => {
  const designTokens = getDesignTokens(mode)
  return createTheme(designTokens)
}
