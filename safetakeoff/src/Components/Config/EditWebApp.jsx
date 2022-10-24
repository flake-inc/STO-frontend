import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React from 'react';
import StickyFooter from "../Public/Copyright/Copyright";
import Box from '@mui/material/Box';

export default function EditWebApp() {
    return (
        <>
        <ResponsiveAppBar />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* <Header onDrawerToggle={handleDrawerToggle} /> */}
                <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                    <h1> This is Edit Web App Page!</h1><br />
                </Box>
                <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                    <StickyFooter />
                </Box>
            </Box>
            
        </>
    );
}