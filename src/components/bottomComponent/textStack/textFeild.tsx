
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import { TextFeildType } from '../../../utils/types';
import { TextConstants } from '../../../utils/constants';


const  TextFeild = ({handler,field_value,index}:TextFeildType)=> {
  
    const [fieldValue,setFieldValue] = React.useState<string>(field_value);
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(event.target.value);
    };
    const blurHandler = ():void => {
        if(field_value!==fieldValue)
            handler(fieldValue);
    }
  
    return (
    <Box sx={{ width:'300px' ,'& > :not(style)': { m: 1, } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', height:'80px' }}>
        {index===1?<BusinessIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />:<PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
        <TextField
        onChange={inputHandler}
        onBlur={blurHandler}
        value={fieldValue}
        fullWidth label={index===1?TextConstants.companyPlaceholder:TextConstants.jobTitlePlaceholder} 
        variant="standard" 
        />
      </Box>
    </Box>
  );
}

export default TextFeild