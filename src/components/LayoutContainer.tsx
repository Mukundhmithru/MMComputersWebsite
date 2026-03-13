import { Box, Container, Typography } from '@mui/material'
import type React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth={false} className="mm-container">
          {children}
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

