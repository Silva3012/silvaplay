// Import useTheme hook
import { useTheme } from '@mui/material/styles';

export default function Footer() {
    // Calling the hook to access the current theme object
    const theme = useTheme();
    return (
        <div className="footer" style={{ backgroundColor: theme.palette.background.extra }}>
            <a href="http://ntsika.producedbysilva.co.za" style={{ color: theme.palette.secondary.main }} target="_blank" rel="noopener noreferrer">
            © {new Date().getFullYear()} Ntsika Silvano
          </a>
        </div>
    )
}