import { Box, Stack } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import gifVideo from "../../assests/gifVideo.mp4";
import { BoxOne, BoxThree, BoxTwo } from './styles';
const IntroRight = () => {
    return (
        <Box
            width='40%'
        >
            <Stack sx={{ width: '100%', marginRight: '10px', my: 10 }} >
                <BoxOne />
                <BoxTwo>
                    <video
                        autoPlay
                        loop
                        muted
                        poster={gifVideo}
                        style={{ width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'fill' }}
                    >
                        <source
                            src={gifVideo}
                            type="video/mp4"
                        />
                    </video>
                </BoxTwo>
                <BoxThree />
                <Box sx={{ marginTop: '60%' }}>
                    <AutoAwesomeIcon sx={{ fontSize: '90px' }} />
                </Box>
            </Stack>
        </Box>
    )
}

export default IntroRight