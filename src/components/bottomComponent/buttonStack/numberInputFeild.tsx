import * as React from 'react';
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';

import { StyledButton, StyledInputElement, StyledInputRoot } from '../styles/styles';

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: '▴',
        },
        decrementButton: {
          children: '▾',
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

const NumberOfCharInput = () =>{
  const [value, setValue] = React.useState<number | null>(400);
  return (
    <NumberInput
      aria-label="Number of Characters"
      placeholder="Number of Characters"
      value={value}
      min={300}
      max={600}
      onChange={(event, val) => {
      
        if( val!==null && val>200 && val<=600)
            setValue(val)
    }}
    />
  );
}


export default NumberOfCharInput;