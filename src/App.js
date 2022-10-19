import { Box, Button, Container, styled, Typography } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Add, Settings } from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed"
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import { Stack } from '@mui/system';
function App() {

  return (
    <Box>

      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;