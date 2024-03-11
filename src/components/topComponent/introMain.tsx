import { Box } from '@mui/material'
import { IntroMainType } from '../../utils/types'
import IntroLeft from './introLeft'
import IntroRight from './introRight'
import { MainIntro } from './styles'


function IntroMain({ scrollRef }: IntroMainType) {
    return (
        <Box>
            <MainIntro
                direction="row"
                spacing={1}
            >
                <IntroLeft scrollRef={scrollRef} />
                <IntroRight />
            </MainIntro>
        </Box>
    )
}

export default IntroMain