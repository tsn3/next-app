'use client'
import { FC } from 'react'
import { ThemeRegistry } from './ThemeRegistry'
import { Sidebar } from '@/Sidebar'

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <body>
      <ThemeRegistry options={{ key: 'mui' }}>
        <Sidebar />
        {children}
      </ThemeRegistry>
    </body>
  </html>
)

export default RootLayout
