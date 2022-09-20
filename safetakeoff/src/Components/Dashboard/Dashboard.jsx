import React from 'react';
import Copyright from '../Public/Copyright/Copyright';
import ResponsiveAppBar from './ResponsiveAppBar';
import CenteredTabs from './CenteredTabs';
import Box from '@mui/material/Box';

function DashboardContent() {

  return (
    <>
    <ResponsiveAppBar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* <Header onDrawerToggle={handleDrawerToggle} /> */}
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
              <h1>This is the Dashboard Page!</h1><br />
            </Box>
            <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
              <CenteredTabs />
              <Copyright sx={{ pt: 4 }}/>
            </Box>
        </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}