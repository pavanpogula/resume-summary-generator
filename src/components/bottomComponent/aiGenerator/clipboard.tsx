
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { Typography } from '@mui/material';
import { useAppSelector } from '../../../app/hooks';

export default function ClipBoard() {
    const { isLoading, textData } = useAppSelector(state => state.userReducer.aiContent);
    return (
        (isLoading || textData ) ?
            <Box sx={{ width: '95%' }}>
                <Typography sx={{ fontWeight: '400', margin: '10px', color: 'white', fontSize: '24px', textDecoration: 'underline' }}>
                    Summary
                </Typography>
                <Box sx={{
                    border: '1px solid grey',
                    borderRadius: '15px',
                    padding: '15px',
                    marginLeft: '10px',
                    background: 'grey'
                }}>
                    {
                        isLoading ? <>
                            <Skeleton height={40} width={'50%'} />
                            <Skeleton height={30} animation="wave" />
                            <Skeleton height={30} animation={"wave"} />
                        </> :
                            <Box sx={{ width: '100%', lineHeight: '1.4', letterSpacing: '1px', fontFamily: 'monospace' }}>
                                <span>{textData}</span>
                            </Box>
                    }
                </Box>
            </Box>


            : <></>

    );
}