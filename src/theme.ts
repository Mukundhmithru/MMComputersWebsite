import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0ea5e9', // light blue
      light: '#38bdf8',
      dark: '#0369a1',
    },
    secondary: {
      main: '#0284c7',
    },
    background: {
      default: '#e0f2fe',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: (palette) => ({
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: '1.9rem',
      lineHeight: 1.2,
      [`@media (min-width:600px)`]: {
        fontSize: '2.3rem',
      },
      [`@media (min-width:900px)`]: {
        fontSize: '2.75rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.25,
      [`@media (min-width:600px)`]: {
        fontSize: '1.8rem',
      },
      [`@media (min-width:900px)`]: {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.25rem',
      [`@media (min-width:600px)`]: {
        fontSize: '1.4rem',
      },
      [`@media (min-width:900px)`]: {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '0.95rem',
      lineHeight: 1.55,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  }),
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            'linear-gradient(to right, rgba(14,165,233,0.95), rgba(37,99,235,0.95))',
        },
      },
    },
  },
})

export default theme

