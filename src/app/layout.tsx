'use client'
import { FC, ReactNode } from 'react'
import { ThemeRegistry } from './ThemeRegistry'
import { Sidebar } from '@/Sidebar'

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <body>
      <ThemeRegistry options={{ key: 'mui' }}>
        <Sidebar children={children} />
      </ThemeRegistry>
    </body>
  </html>
)

export default RootLayout
