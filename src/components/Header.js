// Import useTheme hook
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image'


export default function Header() {
    // Calling the hook to access the current theme object
    const theme = useTheme();

  return (
     <header className="header" style={{ backgroundColor: theme.palette.background.extra, display: 'flex', justifyContent: 'space-between'  }}>
      <div className="logo">
        <Link href="/" style={{ color: theme.palette.secondary.main, textDecoration: 'none' }}>SILVAPLAY</Link>
        <br />
        <br />
        <Link href="/" style={{ color: theme.palette.secondary.main, textDecoration: 'none' }}>Home</Link>
      </div>
      <div className="spotify-logo">
        <Image src="/Spotify_Logo_RGB_White.png" alt="Spotify Logo" width={150} height={50} />
      </div>
    </header>
  );
}
