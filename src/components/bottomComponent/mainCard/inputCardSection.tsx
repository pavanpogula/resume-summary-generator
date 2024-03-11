
import {  Stack } from '@mui/material';


import { IntroMainType } from '../../../utils/types';
import IntroFab  from './introFab';
import { MainCard } from '../styles/styles';
import TextStack from '../textStack/textStack';
import TextAreaStack from '../textAreaStack/textAreaStack';
import ButtonStack from '../buttonStack/buttonStack';
import ClipBoard from '../aiGenerator/clipboard';

const InputCardSection = ({scrollRef}:IntroMainType) => {
  return (
    <div>
    <IntroFab/>
    
    <MainCard
      ref={scrollRef}
      id='main-box-component'
      p={1}
      mx={'auto'}
      my={10}
    >
      <Stack spacing={1} sx={{ width: '100%', marginRight: '10px', marginLeft: '10px', my: 2 }} >
      <TextStack/>
      
        <TextAreaStack/>
       
        <ButtonStack/>
        <ClipBoard/>
      </Stack>
    </MainCard>
</div>
  )
}


export default InputCardSection