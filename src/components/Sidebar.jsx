import { AccountBox, Article, Groups, Home, Inbox, LocalGroceryStore, ModeNight, Nightlight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { Profiler } from 'react'

const Sidebar = ({setMode, mode}) => {
  return (
   <Box 
   flex={1} 
   p={2} 
   sx={{display: {xs : "none", sm : "block"}}}>
    sideBar
    <Box sx={{position:"fixed"}}>

    <List>
        {/* item 1 */}
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
        </ListItemButton>
        </ListItem>

        {/* Item 2 */}
        <ListItem disablePadding>
        <ListItemButton component="a" href="#pages">
            <ListItemIcon>
            <Pages/>
            </ListItemIcon>
            <ListItemText primary="pages" />
        </ListItemButton>
        </ListItem>

        {/* Item 3 */}
        <ListItem disablePadding>
        <ListItemButton component="a" href="#groups">
            <ListItemIcon>
            <Groups/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
        </ListItemButton>
        </ListItem>
        {/* Item 4 */}
        <ListItem disablePadding>
        <ListItemButton component="a" href="#Marketplace">
            <ListItemIcon>
            <LocalGroceryStore/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
        </ListItemButton>
        </ListItem>
        {/* Item 5 */}
        <ListItem disablePadding>
        <ListItemButton component="a" href="#Settings">
            <ListItemIcon>
            <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
        </ListItem>
        {/* Item 6 */}
        <ListItem disablePadding>
        <ListItemButton component="a" href="#profile">
            <ListItemIcon>
            <AccountBox/>
            </ListItemIcon>
            <ListItemText primary="profile" />
        </ListItemButton>
        </ListItem>
        {/* Item 6 */}
        <ListItem disablePadding>
        <ListItemButton component="a" href="#profile">
            <ListItemIcon>
            <ModeNight/>
            </ListItemIcon>
            <Switch onChange={e => setMode(mode == "light" ? "dark" : "light")} />
        </ListItemButton>
        </ListItem>
    </List>
    </Box>
    </Box >
  )
}

export default Sidebar