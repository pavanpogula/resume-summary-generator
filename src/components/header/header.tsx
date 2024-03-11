
import { Box, Toolbar} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import profile from "../../assests/profile.jpeg"
import { AppBarStyled, HeaderTitle } from '../../utils/resumeStyles';




const Header = () =>
(
    <AppBarStyled>
        <Toolbar>
            <Box flexGrow={0}>
                <Tooltip title="Pavan Pogula">
                    <IconButton href='https://www.linkedin.com/in/pavanreddyp/' target='_blank' sx={{ p: 0 }}>
                        <Avatar alt="Pavan Pogula" src={profile} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box margin={'auto'}>
                <HeaderTitle align='center' variant="h4">
                    Summary Generator
                </HeaderTitle>
            </Box>
        </Toolbar>
    </AppBarStyled>
);

export default Header;