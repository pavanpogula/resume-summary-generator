

import { Box, Button, Stack, Typography } from '@mui/material';
import { styled as materialStyled } from '@mui/material/styles';

export const IntroTitle = materialStyled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto Mono',
    fontSize: '40px',
    fontWeight: '700',
    textAlign: 'left',
    color: 'black',

}))


export const IntroSubTitle = materialStyled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto Mono',
    fontSize: '24px',
    fontWeight: '700',
    textAlign: 'left',
    color: 'black',
    marginTop: '10px',
}))

export const IntroGenerateButton = materialStyled(Button)(({ theme }) => ({
    fontFamily: 'cursive',
    fontSize: '20px',
    backgroundColor: 'black',
    padding: '14px',
    boxShadow: `6px -2px 11px 3px rgba(0, 0, 0, 0.2),
  -6px 2px 11px 3px rgba(0, 0, 0, 0.2)`,
    textTransform: 'none',
    borderRadius: '30px',
    color: 'white',
    ':hover': {
        backgroundColor: '#000000cc'
    }
}))



export const BoxOne = materialStyled(Box)(({ theme }) => ({
    border: '5px solid black',
    width: '312px',
    height: '194px',
    marginLeft: '12%',
    borderRadius: '40px',
    position: 'absolute',
    zIndex: '1'
}))

export const BoxTwo = materialStyled(Box)(({ theme }) => ({
    position: 'absolute',
    zIndex: '2',
    width: '412px',
    height: '300px',
    marginTop: '2%',
    marginLeft: '3%',
    borderRadius: '48px',
}))

export const BoxThree = materialStyled(Box)(({ theme }) => ({
    position: 'absolute',
    border: '5px solid black',
    width: '372px',
    height: '301px',
    marginTop: '4%',
    borderRadius: '48px',
    zIndex: '1'
}))


export const MainIntro = materialStyled(Stack)(({ theme }) => ({
    height: '100vh',
    width: '100%',
    minWidth: '900px',
    maxWidth: '1500px',
    minHeight: '100vh',

}))