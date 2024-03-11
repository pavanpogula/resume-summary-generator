import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import SpeedDial from '@mui/material/SpeedDial';
import { styled as materialStyled } from '@mui/material/styles';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { AppBar,  Typography } from '@mui/material';




export const StyledTextarea = materialStyled(TextareaAutosize)({
  resize: 'none',
  border: 'none', // remove the native textarea border
  minWidth: 0, // remove the native textarea width
  outline: 0, // remove the native textarea outline
  padding: 0, // remove the native textarea padding
  paddingBlockStart: '1em',
  paddingInlineEnd: `var(--Textarea-paddingInline)`,
  flex: 'auto',
  alignSelf: 'stretch',
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',

  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  // specific to TextareaAutosize, cannot use '&:focus ~ label'
  '&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label': {
    top: '0.5rem',
    fontSize: '0.75rem',

  },
  '&:focus + textarea + label': {
    color: 'var(--Textarea-focusedHighlight)',

  },
});





export const StyledSpeedDial = materialStyled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '.MuiSpeedDial-fab': {
    'background-color': 'black',
    '&:hover': {
      'background-color': 'black',
    },
  },


  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {

    top: theme.spacing(2),
    left: theme.spacing(2),

  },
  '.MuiSpeedDialAction-staticTooltipLabel': {
    width: 'max-content',
    cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0 black',
    background: 'white',
    color: 'black',
    transition: 'ease-out 0.4s',

  },

  '.MuiSpeedDialAction-fab': {
    'background-color': 'black',
    'color': 'white',
    '&:hover': {
      'background-color': '#090909cf',

    },
  },
}));


export const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

export const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};


export const Textarea = materialStyled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    max-width:100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);




export const AppBarStyled = materialStyled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: '#00000063',
  border: '4px solid black',
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  position: "relative",
}));



export const HeaderTitle = materialStyled(Typography)(({ theme }) => ({
  flexGrow: 1,
  color: 'black',
  fontWeight: 600,
}));




