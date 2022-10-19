import { AccountBox, Article, Groups, Home, Inbox, ModeNight, Nightlight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { Profiler } from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} 
    sx={{display:{xs:"none", sm:"block"}}}>Sidebar
    

    <List>
        {/* Item one */}
        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>

        {/* Item Two */}

        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Article />
                    </ListItemIcon>
                <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>

        {/* Item Three */}

        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Groups />
                    </ListItemIcon>
                <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>

         {/* Item Three */}

         <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Storefront />
                    </ListItemIcon>
                <ListItemText primary="MarketPlace" />
            </ListItemButton>
        </ListItem>

         {/* Item Three */}

         <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>

         {/* Item Three */}

         <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>

         {/* Item Three */}

         <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
        
         {/* Item Three */}

         <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Nightlight />
                    </ListItemIcon>
                    <Switch></Switch>
            </ListItemButton>
        </ListItem>
    </List>
    </Box>
  )
}

export default Sidebar