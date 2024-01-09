import styled from '@emotion/styled'
import { Diamond, Mail,Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase,Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import avatarImg from "../Images/avatar2.png"
import React, { useState } from 'react'


const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "Space-between",
});

const Search = styled("Box")(({theme})=>({
    backgroundColor:"white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled("Box")(({theme})=>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
    
}));

const UserBox = styled("Box")(({theme})=>({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

function Navbar() {
    const [open , setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyleToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>LOGO,, </Typography>
            <Diamond sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='Search...'/></Search>
            <Icons>
                <Badge badgeContent={4} color='error'>
                    <Mail/>
                </Badge>
                <Badge badgeContent={2} color='error'>
                    <Notifications/>
                </Badge>
                <Avatar sx={{width: 30 , height: 30}} src={avatarImg} onClick={(e)=>setOpen(true)}/>
            </Icons>
            <UserBox onClick={(e)=>setOpen(true)}>
                <Avatar sx={{width: 30 , height: 30}} src={avatarImg}/>
                <Typography variant='span'>Yusra</Typography>
            </UserBox>
        </StyleToolbar>
        <Menu 
          id= "demo-positioned-menu"
          aria-labelledby='demo-positioned-button'
          open ={open}
          onClick={(e)=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical:'top',
            horizontal:'right',
          }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>

        </Menu>
    </AppBar>
  )
}

export default Navbar