import { createTheme } from '@mui/material/styles'
import { text, primary, secondary } from './colors'
import { getDesignTokens } from '@/init/theme/getDesignTokens'

export const theme = createTheme(getDesignTokens('light'))
