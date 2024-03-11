

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography } from '@mui/material';


export default function Footer() {
  return (
    <Box sx={{ width: '100%',bgcolor:'red' }}>
      <BottomNavigation
      >
        <Typography p={1} color={'grey'} fontSize={'14px'} my={'auto'}>Developed by Pavan Pogula using React.js | © 2024 All rights reserved.</Typography>
      </BottomNavigation>
    </Box>
  );
}