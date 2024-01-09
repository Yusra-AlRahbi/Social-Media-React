import { Box} from '@mui/material'
import React from 'react'
import AvtatImg1 from "../Images/avatar.png"
import AvtatImg2 from "../Images/avatar2.png"
import Img1 from "../Images/Img1.jpg"
import Img5 from "../Images/Img5.jpg"
import Img6 from "../Images/Img6.jpg"
import Img7 from "../Images/Img7.jpg"
import Post from './Post' 


function Feed() {
  return (
    <Box 
     flex={4} p={2}
     >
     <Post Img ={Img1} userName={"Yusra"} AvatarImg={AvtatImg2} date={"Decemper 12 , 2023"}/>
     <Post Img ={Img5} userName={"Dana"} AvatarImg={AvtatImg1} date={"Decemper 14 , 2023"}/>
     <Post Img ={Img6} userName={"Rakan"} AvatarImg="" date={"Octoper 13 , 2023"}/>
     <Post Img ={Img7} userName={"Sultan"} AvatarImg= "" date={"Novemper 12 , 2023"}/>
     
    </Box>
  )
}

export default Feed