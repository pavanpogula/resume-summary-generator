import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { snackbarType, aiContentType } from '../utils/types'

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyC19WH6mOpBab2lF3zPd8fcooeQHrlrX8s')
type InitialState = { 
  company: string;
  jobTitle: string;
  resumeData: string,
  jobDescription: string;
  snackbar: snackbarType
  aiContent:aiContentType,
  numsOfChars: number,
  
}
const initialState: InitialState = {
  resumeData: '',
  company:'',
  jobTitle: '',
  jobDescription:'',
  snackbar:{
    isOpen: false,
    message:'',
    isError:false
  },
  aiContent:{
    isError: false,
    textData: "",
    isLoading: false,
  },
  numsOfChars:400
  
}

export const generateAIContent = createAsyncThunk('user/generateContent', async (prompt:string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  return model.generateContent(prompt).then(result => result.response.text()).catch(error=> "error");
})



const userDataSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    
    updateResumeData: (state, action: PayloadAction<string>) => {
      state.resumeData = action.payload
    },
    updateJobDescription: (state, action: PayloadAction<string>) => {
      state.jobDescription = action.payload
    },
    updateSnackbar : (state, action: PayloadAction<snackbarType>) => {
      state.snackbar = action.payload
    },
   
    updateCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload
    },
    updateJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload
    },
    updateNumsOfChars: (state, action: PayloadAction<number>) => {
      state.numsOfChars = action.payload
    },
    
   
  },
  extraReducers: builder => {
    builder.addCase(generateAIContent.pending, state => {
      state.aiContent = {
        isError:false,
        isLoading:true,
        textData:''
      }
    })

    builder.addCase(generateAIContent.fulfilled, (state, action:PayloadAction<string> ) => {
      state.aiContent = {
        isError:false,
        isLoading:false,
        textData:action.payload
      }
    })
    builder.addCase(generateAIContent.rejected, (state, action) => {
      state.aiContent = {
        isError:true,
        isLoading:false,
        textData:''
      }
    })
  }
   
})

export default userDataSlice.reducer
export const { updateJobDescription, updateCompany, updateJobTitle, updateResumeData, updateSnackbar } = userDataSlice.actions