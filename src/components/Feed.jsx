import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react'
import { Post } from './Post';

export const Feed = () => {
  return (
    <Box  flex={4} p={2}>
        <Post link={"https://images.pexels.com/photos/4057701/pexels-photo-4057701.jpeg"}/>
        
        <Post link={"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
        <Post link={"https://images.pexels.com/photos/14017961/pexels-photo-14017961.jpeg"}/>
    </Box>
  )
}

export default Feed;