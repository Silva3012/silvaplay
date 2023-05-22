import '@/styles/globals.css'
// Import ThemeProvider
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/Theme';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
