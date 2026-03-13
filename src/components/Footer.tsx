import { Box, Container, Typography } from '@mui/material'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        borderTop: '1px solid rgba(148, 163, 184, 0.3)',
        backgroundColor: '#e0f2fe',
      }}
    >
      <Container className="mm-container" sx={{ py: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              MM Computers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Laptop, desktop & networking solutions for homes and offices.
            </Typography>
          </Box>
          <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
            <Typography variant="body2" color="text.secondary">
              Mon - Sat: 9:00 AM - 8:00 PM
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} MM Computers. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}