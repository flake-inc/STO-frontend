import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import AirCraftList from "./AirCraftList"
import StickyFooter from "../Public/Copyright/Copyright";
import React from 'react';
import Box from '@mui/material/Box';


export default function ViewAllAirCrafts() {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* <Header onDrawerToggle={handleDrawerToggle} /> */}
                <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                <h1> This is Viewing AirCraft Page!</h1><br />
                    <AirCraftList />
                </Box>
            <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <StickyFooter />
          </Box>
        </Box>
            
        </>
    );
}