import React from 'react';
import { Box } from '@mui/system';
import { FormControl, TextField } from '@mui/material';

const TextFieldComp = () => {
  const handleChange = () => {};
  return (
    <div>
      <Box mt={3} width='100%'>
        <FormControl fullWidth size='small'>
          <TextField
            onChange={handleChange}
            variant='outlined'
            label='Amount of Questions'
            type='number'
            size='small'
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default TextFieldComp;
