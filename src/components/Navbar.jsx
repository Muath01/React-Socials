import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Mail, Notifications, Pets } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});


const Search = styled("div")(({theme}) => ({
  backgroundColor:"white",
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: "5px",
  width:"40%"

}))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({theme}) => ({
  padding:"0 10px",
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },


}))


export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block" }}}>Socials</Typography>
        <Pets sx={{display:{xs:"block", sm:"none" }}}/>
        <Search>
          <InputBase placeholder="search..." ></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={5} color="error">
            <Mail ></Mail>
          </Badge>
          <Badge badgeContent={5} color="error">
            <Notifications ></Notifications>
          </Badge>
          <Avatar onClick={(e) => setOpen(true)} sx={{width:30, height:30}} src="https://images.pexels.com/photos/10039008/pexels-photo-10039008.jpeg"/>
        </Icons>
        <UserBox>
        <Avatar onClick={(e) => setOpen(true)} sx={{width:30, height:30}} src="https://images.pexels.com/photos/10039008/pexels-photo-10039008.jpeg"/>
        <Typography variant="span">Muath</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
   
  )
}


export default Navbar;