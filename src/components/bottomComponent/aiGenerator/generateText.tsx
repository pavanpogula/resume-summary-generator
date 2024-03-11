
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { generateAIContent, updateSnackbar } from '../../../features/userDataSlice';

const GenerateText = () => {
    const dispatch = useAppDispatch();
    const resumeData: string = useAppSelector(state => state.userReducer.resumeData);
    const jobDescription: string = useAppSelector(state => state.userReducer.jobDescription);
    const companyName: string = useAppSelector(state => state.userReducer.company);
    const jobTitle: string = useAppSelector(state => state.userReducer.jobTitle);
    const numberOfCharacters: number = useAppSelector(state => state.userReducer.numsOfChars);
    const { isLoading } = useAppSelector(state => state.userReducer.aiContent);




    const generateHandler = () => {

        if (!resumeData || !jobDescription || !companyName || !jobTitle) {
            dispatch(updateSnackbar({ isError: true, isOpen: true, message: `A) Death   B) Stupidity   C) API Issues ` }))
        } else {

            const prompt = `
                As the Hiring Manager at ${companyName}, 
                you are actively seeking a highly skilled and motivated individual to join your team in the role of ${jobTitle}. 
                I will now furnish you with the detailed job description for the ${jobTitle} position,
                Job descrpitoin will be present in between the tags <Job Description> and </Job Description>.
                My resume data will be present in between the tags <ResumeSection> and </ResumeSection>. 
                Your goal is to generate a summary section for my resume based on the provided job description. 
                Please make sure to include soft skills in the generated summary section that matches the candidate you're looking to hire based on the given Job description. 
                Ensure that the summary does not exceed ${numberOfCharacters} characters and is presented in a single paragraph. 
                The summary should be crafted in a generic and professional manner without explicitly mentioning the company name.
                    <JobDescription>
                    Job Title: ${jobTitle}
                    ${jobDescription} 
                    </JobDescription>
                    <ResumeSection>
                    ${resumeData} 
                    </ResumeSection>
              `;

            dispatch(generateAIContent(prompt))
        }
    }

    return (
        <>
            <Button 
            disabled={isLoading}
            onClick={generateHandler} sx={{ borderRadius: '20px', textTransform: 'none', fontSize: '15px' }} variant="outlined"
                endIcon={isLoading ? <CircularProgress size={30} /> : <AutoAwesomeIcon />}>
                Generate Summary
            </Button>
        </>
    );
};

export default GenerateText;
