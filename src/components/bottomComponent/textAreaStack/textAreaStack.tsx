import Stack from '@mui/material/Stack';

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { updateJobDescription, updateResumeData } from '../../../features/userDataSlice';

import { Divider } from '@mui/material';
import TextAreaHOC from './textAreaHOC';
import TextArea from './textArea';

const TextAreaStack = () => {
    const dispatch = useAppDispatch();
    const resumeData: string = useAppSelector(state => state.userReducer.resumeData);
    const jobDescription: string = useAppSelector(state => state.userReducer.jobDescription);


    const resumeHandler = (data: string): void => {
        dispatch(updateResumeData(data));
    }

    const jobDescriptionHandler = (data: string): void => {
        dispatch(updateJobDescription(data));
    }

    return (
        <>
            <Divider sx={{ height: '10px' }} />
            <Stack sx={{ width: '100%', justifyContent: 'center', marginTop: '10px', height: '340px' }} direction="row" spacing={1}>
                <TextAreaHOC WrappedComponent={TextArea} data={resumeData} handler={resumeHandler} componentTitle={'Resume'} key={1} />
                <TextAreaHOC WrappedComponent={TextArea} data={jobDescription} handler={jobDescriptionHandler} componentTitle={'Job Description'} key={2} />
            </Stack>
            <Divider sx={{ height: '10px' }} />
        </>
    )
}
export default TextAreaStack;