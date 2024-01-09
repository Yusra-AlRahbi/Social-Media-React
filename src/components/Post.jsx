import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar , Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox} from '@mui/material'

const Post= ({Img , userName, AvatarImg, date})=> {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar src= {AvatarImg} aria-label='recipe'>
            
          </Avatar>
        } 
        action={
          <IconButton aria-label='settings'>
            <MoreVert/>
          </IconButton>
        }
        title={userName}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="20%"
        image= {Img}
        alt=''
      />
      <CardContent>
        <Typography variant='body2' color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ratione, dolor officia assumenda commodi tempora iusto sapiente placeat consequuntur asperiores tempore dicta, velit facere rerum dignissimos impedit reiciendis soluta nemo.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
         <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
        </IconButton>
        <IconButton aria-label='share'>
          <Share/>
        </IconButton>
      </CardActions>
   </Card>
  )
}

export default Post