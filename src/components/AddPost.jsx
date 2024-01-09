import { Fab, Modal, Tooltip,Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import {Add, EmojiEmotions, PersonAdd, VideoCameraBack,Image, DateRange} from '@mui/icons-material'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import ImgAva from "../Images/avatar2.png"
import { grey } from '@mui/material/colors'

const StyleModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom: "20px"
})

const AddPost=()=> {
  const [open,setOpen]=useState(false)
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)}
       title="Add" 
       sx={{
         position:"fixed",
         bottom:20 ,
         left:{xs:"calc(4%)" , md:25}
       }}
      >
      <Fab color='primary'aria-label='add'>
        <Add/>
      </Fab>
     </Tooltip>
     <StyleModal
       open={open}
       onClose={e=>setOpen(false)}
       aria-labelledby= "modal-modal-title"
       aria-describedby="modal-modal-description"
     >
      <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
        <Typography variant='h6' color="grey" textAlign={"center"}>Create Post</Typography>
        <UserBox>
          <Avatar
            src={ImgAva}
            sx={{width:30, height:30}}
          />
          <Typography fontWeight={500} variant='span'>Yusra</Typography>
        </UserBox>
        <TextField
          sx={{width:"100%"}}
          id='standard-multiline-static'
          multiline
          rows={3}
          placeholder="What's in your mind?"
          variant='standard'
        /> 
        <Stack direction={"row"} gap={1} mt={2} mb={3}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup
          fullWidth
          variant='contained'
        >
          <Button>Post</Button>
          <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
      </Box>
     </StyleModal>
    
    </>
  )
}

export default AddPost