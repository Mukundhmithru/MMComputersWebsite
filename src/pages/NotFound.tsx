import { Box, Button, Stack, Typography } from '@mui/material'

export function NotFound() {
  const scrollToHome = () => {
    const element = document.getElementById('home')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Box className="mm-section">
      <Stack spacing={2}>
        <Typography variant="h2">Page not found</Typography>
        <Typography variant="body1" color="text.secondary">
          The page you are looking for does not exist. Use the navigation above
          or return to the home page.
        </Typography>
        <Button
          onClick={scrollToHome}
          variant="contained"
          color="primary"
        >
          Back to Home
        </Button>
      </Stack>
    </Box>
  )
}

