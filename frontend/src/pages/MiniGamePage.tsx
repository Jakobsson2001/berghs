import { useState } from 'react';
import { Container, Box, Typography, Paper, Tabs, Tab } from '@mui/material';
import SpinTheWheel from '../components/SpinTheWheel';
import MemoryGame from '../components/MemoryGame';
import SEO from '../components/SEO';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`minigame-tabpanel-${index}`}
      aria-labelledby={`minigame-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const MiniGamePage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <SEO
        title="Interactive Mini Games - Spin the Wheel & Memory Game | Berghs Class"
        description="Play interactive mini games: Spin the Wheel and Memory Game. Learn how to connect React frontend to Flask backend with these fun, educational examples."
        path="/minigame"
      />
      <Container maxWidth="md" sx={{ px: 2 }}>
      <Box
        className="prose"
        sx={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 5,
          p: 5,
          boxShadow: 'var(--shadow)',
          mt: 4,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '34px', mb: 2, color: 'var(--text)' }}>
          🎮 Mini Games
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--muted)', fontSize: '17px' }}>
          Interactive games connecting React frontend to Flask backend (no database required!)
        </Typography>

        <Paper sx={{ mb: 3 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
              },
            }}
          >
            <Tab label="🎡 Spin the Wheel" />
            <Tab label="🧠 Memory Game" />
          </Tabs>
        </Paper>

        <TabPanel value={currentTab} index={0}>
          <SpinTheWheel />
        </TabPanel>

        <TabPanel value={currentTab} index={1}>
          <MemoryGame />
        </TabPanel>
      </Box>
      </Container>
    </>
  );
};

export default MiniGamePage;

