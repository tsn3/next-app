'use client'
import { FC, ReactNode, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Brightness4Outlined, Brightness7Outlined } from '@mui/icons-material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { useCustomTheme } from '../hooks/useCustomTheme'

interface ThemeRegistryProps {
  options: EmotionCache
  children: ReactNode
}
interface CacheState {
  cache: EmotionCache
  flush: () => string[]
}

export const ThemeRegistry: FC<ThemeRegistryProps> = (props) => {
  const { options, children } = props

  const { mode, toggleColorMode, theme } = useCustomTheme()

  const [{ cache, flush }] = useState<CacheState>(() => {
    const cache = createCache(options)
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args): string | void => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = (): string[] => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 10,
          }}
        >
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness4Outlined /> : <Brightness7Outlined />}
          </IconButton>
          {mode === 'dark' ? 'Light mode' : 'Dark mode'}
        </Box>
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
