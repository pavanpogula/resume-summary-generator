
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import GenerateText from '../aiGenerator/generateText';
import { updateSnackbar } from '../../../features/userDataSlice';
import NumberOfCharInput from './numberInputFeild';


export default function ButtonStack() {
    const { textData } = useAppSelector(state => state.userReducer.aiContent);
    const dispatch = useAppDispatch();
    const handleCopy = () => {

        try {
            navigator.clipboard.writeText(textData).then(function (x) {
                dispatch(updateSnackbar({ isError: false, isOpen: true, message: `copied to clipboard` }))
            });
        } catch (error) {
            console.error('Failed to copy text to clipboard:');
        }

    };
    return (
        <>

            <Stack direction="row" marginLeft={'10px!important'} spacing={2} >
                <NumberOfCharInput />
                <GenerateText />

                {textData &&
                    <Button onClick={handleCopy} sx={{ borderRadius: '20px', textTransform: 'none', fontSize: '15px' }} variant="outlined" endIcon={<ContentCopyIcon />}>
                        Copy To Clipboard
                    </Button>
                }
            </Stack>
        </>
    );
}