import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const Navbar2 = () => {
    return (
        <AppBar position="sticky" color="primary" elevation={4}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/">
                        <Typography variant="h6" color="white"
                            sx={{ fontWeight: 'bold', ':hover': { backgroundColor: 'primary', opacity: 0.7 } }}>
                            Daniel Caceres
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {['about', 'skills', 'experience', 'projects', 'education'].map((page) => (
                        <Link key={page} href={`/${page}`}>
                            <Button color="inherit" sx={{ ':hover': { backgroundColor: 'primary', opacity: 0.7 } }}>
                                <Typography variant="button">
                                    {page}
                                </Typography>
                            </Button>
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar2;
