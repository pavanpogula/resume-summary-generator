import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { updateCompany, updateJobTitle } from '../../../features/userDataSlice';
import TextFeild from './textFeild';


const TextStack = () => {
    const dispatch = useAppDispatch();
    const company: string = useAppSelector(state => state.userReducer.company);
    const jobTitle: string = useAppSelector(state => state.userReducer.jobTitle);

    const companyHandler = (data: string): void => {
        dispatch(updateCompany(data));
    }

    const jobTitleHandler = (data: string): void => {
        dispatch(updateJobTitle(data));
    }

    return (
            <Box >
                <Stack sx={{ width: '100%', justifyContent: 'center' }} direction="row" spacing={1}>
                    <TextFeild
                        field_value={company}
                        handler={companyHandler}
                        index={1} />
                    <TextFeild
                        field_value={jobTitle}
                        handler={jobTitleHandler}
                        index={2}
                    />
                </Stack>
            </Box>
    )
}
export default TextStack;