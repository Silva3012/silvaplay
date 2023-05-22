import { createTheme } from '@mui/material/styles';

// Create a dark mode theme using MUI's createTheme function
const theme = createTheme({
  // Define the palette for the theme
  palette: {
    // Set the mode to 'dark' for dark mode
    mode: 'dark',
    // Define the primary color
    primary: {
      main: '#1BA665',
    },
    // Define the secondary color
    secondary: {
      main: '#1BA657',
    },
    // Define the background colors
    background: {
      // Set the default background color for the overall layout
      default: '#0D0D0D',
      // Set the background color for paper-like surfaces
      paper: '#00010D',
      // Set an additional background color
      extra: '#010D00'
    },
  },
});

export default theme;
