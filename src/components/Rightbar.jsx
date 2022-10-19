import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react'

export const Rightbar = () => {
  return (
    <Box  flex={2} p={2}
    sx={{display:{xs:"none", sm:"block"}}}>

        <Box position="fixed" width={300}>
            <Typography variant='h6' fontWeight={100}>Onine friends</Typography>
            <AvatarGroup max={7}>
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.ejpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/7.jpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />

            </AvatarGroup>

            {/* two */}

            <Typography varian="h6" fontWeight={100} mt={2} mb={2}>
                Latest Photos 
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/4057701/pexels-photo-4057701.jpeg"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/4057701/pexels-photo-4057701.jpeg"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/4057701/pexels-photo-4057701.jpeg"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>

            
            <Typography varian="h6" fontWeight={100} mt={2} mb={2}>
                Latest Convos 
            </Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
                />
            </ListItem>
        </List>
        </Box>
    
    </Box>
  )
}

export default Rightbar;