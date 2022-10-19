import { Button, styled, Typography } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Add, Settings } from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed"
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
function App() {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;