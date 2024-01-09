import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography,List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material'
import ImgAv1 from "../Images/avatar.png"
import Img2 from "../Images/Img2.jpg"
import Img3 from "../Images/Img3.jpg"
import Img4 from "../Images/Img4.jpg"
import React from 'react'

function Rightbar() {
  return (
    <Box 
      // bgcolor={'lightcoral'}
      flex={2}
      p={2}
      sx={{display:{xs:"none", sm:"block"}}}
      >
        <Box position={"fixed"} width={300}>
          <Typography variant='h6'fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={8}>
            <Avatar alt='Remy' src={ImgAv1}/>
            <Avatar sx={{bgcolor: "red"}}>Y</Avatar>
            <Avatar sx={{bgcolor: "blue"}}>R</Avatar>
            <Avatar alt="yyuu" src=''></Avatar>
            <Avatar sx={{bgcolor: "pink"}} src=''>S</Avatar>
            <Avatar sx={{bgcolor: "skyblue"}} src=''>U</Avatar>
            <Avatar sx={{bgcolor: "blue"}} src=''>T</Avatar>
            <Avatar sx={{bgcolor: "pink"}} src=''>K</Avatar>
            <Avatar sx={{bgcolor: "red"}} src=''>B</Avatar>
            <Avatar sx={{bgcolor: "green"}} src=''>A</Avatar>
          </AvatarGroup>
          <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photo</Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img style={{height:"100px", width:"90px"}}
                src={Img4}
                alt=''
              />
            </ImageListItem>
            <ImageListItem>
              <img style={{height:"100px", width:"90px"}}
                src={Img2}
                alt=''
              />
            </ImageListItem>
            <ImageListItem>
              <img style={{height:"100px", width:"90px"}}
                src={Img3}
                alt=''
              />
            </ImageListItem>
          </ImageList>
          <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversation</Typography>
          <List sx={{width:"100%" , maxWidth:360 , bgcolor:"background.paper"}}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt="Remy" src={ImgAv1}/>
              </ListItemAvatar>
              <ListItemText 
                primary="Brunch this Weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{display:"inline"}}
                      component="span"
                      variant='body2'
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {"- I'll be in your neighborhood doing errands this..."}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component="li"/>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt="Remy" src=""/>
              </ListItemAvatar>
              <ListItemText 
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{display:"inline"}}
                      component="span"
                      variant='body2'
                      color="text.primary"
                    >
                     Ola Jon
                    </Typography>
                    {"- I  Wish could come , but I'm of town this..."}
                  </React.Fragment>
                }
              />
              </ListItem>
              <Divider variant='inset' component="li"/>
              <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt="Remy" sx={{bgcolor:"red"}} src="">R</Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{display:"inline"}}
                      component="span"
                      variant='body2'
                      color="text.primary"
                    >
                      to Scott, Alex, 
                    </Typography>
                    {"- I'll be in your neighborhood doing errands this..."}
                  </React.Fragment>
                }
              />
              </ListItem>


          </List>
        </Box>
    </Box>
  )
}

export default Rightbar