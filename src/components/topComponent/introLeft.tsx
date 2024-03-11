import {Stack } from '@mui/material'
import { Box } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { IntroLeftType } from '../../utils/types';
import { IntroGenerateButton, IntroSubTitle, IntroTitle } from './styles';
import { TextConstants } from '../../utils/constants';



const IntroLeft = ({ scrollRef }: IntroLeftType) => {
    return (
        <Box
            width={'60%'}
        >
            <Stack spacing={2}>
                <Box sx={{
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <IntroTitle >
                        {
                            TextConstants.titleTextOne
                        }
                    </IntroTitle>
                    <IntroTitle sx={{
                        marginTop: '10px',
                    }} >
                        {
                            TextConstants.titleTextTwo
                        }
                    </IntroTitle>
                </Box>
                <Box paddingLeft='40px' >
                    <IntroSubTitle>
                        {TextConstants.subTitleText}
                    </IntroSubTitle>
                </Box>
                <Box paddingLeft='40px' marginTop='100px!important'>
                    <IntroGenerateButton
                        onClick={() => {
                            scrollRef.current?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}
                        endIcon={<AutoAwesomeIcon />}>
                        {'Generate Summary'}
                    </IntroGenerateButton>
                </Box>
            </Stack>
        </Box>
    )
}

export default IntroLeft