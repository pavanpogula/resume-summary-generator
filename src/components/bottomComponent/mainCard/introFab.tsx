import { Avatar, Box, Fab, IconButton, Tooltip } from '@mui/material'
import profileIcon from "../../../assests/profile.jpeg"

const IntroFab = () => {
  return (
    <Box sx={{width:'100px',position:'absolute', '& > :not(style)': { m: 1 } }}>
      <Fab sx={{
        margin:'0px',
        padding:'0px',
        }} aria-label="add">
      <Tooltip title="Pavan Pogula">
              <IconButton href='https://www.linkedin.com/in/pavanreddyp/' target='_blank' sx={{ p: 0,height: 40, width: 40  }}>
                <Avatar alt="Pavan Pogula" src={profileIcon} sx={{ height: 40, width: 40 }} />
              </IconButton>
            </Tooltip>
      </Fab>
    </Box>
  )
}

export default IntroFab
