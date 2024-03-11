import * as React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

import { useAppDispatch } from '../../../app/hooks';
import { updateSnackbar } from '../../../features/userDataSlice';
import { TextAreaType } from '../../../utils/types';
import { Textarea } from '../styles/styles';




const TextArea = ({
    modalHandler,
    isModalOpen,
    data,
    handler,
    componentTitle,
    index

}: TextAreaType) => {
    const dispatch = useAppDispatch();


    const [textData, setTextData] = React.useState<string>(data);
    React.useEffect(() => {
        setTextData(data)
    }, [data])


    const onClickHandler = (): void => {
        if (!isModalOpen)
            modalHandler(true)
    }
    const saveHandler = (): void => {
        if (textData !== data) {
            handler(textData);
            dispatch(updateSnackbar({ isError: false, isOpen: true, message: `${componentTitle} Data Updated Succesfully` }))
        }
        modalHandler(false);
    }
    const clearHandler = (): void => {
        setTextData('');
    }
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isModalOpen)
            modalHandler(true)
        setTextData(event.target.value);
    };

    return (
        <Stack spacing={1} minHeight={'200px'}
            maxHeight={index === 2 ? '600px' : '300px'}
            width={index === 2 ? '600px' : '420px'}
            minWidth={index === 2 ? '600px' : '420px'}
        >

            <Typography sx={{ color: 'white' }}>{componentTitle}</Typography>
            <Textarea
                value={textData}
                onChange={handleTextChange}
                onClick={onClickHandler}
                sx={{

                    minWidth: index === 2 ? '600px' : '420px',
                    maxHeight: index === 2 ? '600px' : '300px',
                    minHeight: index === 2 ? '400px' : '300px',
                }}
                aria-label="minimum height"
                minRows={12}
                maxRows={20}
                placeholder={`Enter ${componentTitle} Data .......`} />
            {
                isModalOpen && <Box
                    sx={{
                        mt: 1,
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row-reverse' },
                    }}
                >
                    <Button onClick={saveHandler} variant="outlined" >Save</Button>
                    <Button onClick={clearHandler} variant="outlined" color="primary" >
                        Clear Data
                    </Button>

                </Box>
            }
        </Stack>
    );
}


export default TextArea