import React from 'react';
import Container from '@mui/material/Container';
import Copyright from '../Public/Copyright/Copyright';
import ResponsiveAppBar from './ResponsiveAppBar';
import CenteredTabs from './CenteredTabs';

function DashboardContent() {

  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <CenteredTabs />
          <h1>This is the Dashboard Page!</h1>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </>
    
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}