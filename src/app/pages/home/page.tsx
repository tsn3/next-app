'use client'
import Link from 'next/link'
import Image from 'next/image'

import Home from '../../../../public/icons/home.svg'
import { Box, Typography } from '@mui/material'

export default function Page() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link href='/about'>About</Link>
        <Link href='/contacts'>Contacts</Link>
      </Box>
      <Typography variant='h1'>
        <Image src={Home} alt='Icon' width={75} /> Hello, Next.js!
      </Typography>
      <Typography>Lorem ipsum dolor sit amet. </Typography>
    </Box>
  )
}
