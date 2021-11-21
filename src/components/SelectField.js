import React, { useState } from 'react';
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectField = (props) => {
  const { label, options } = props;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Box mt={3} width='100%'>
        <FormControl size='small' fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select value={value} label={label} onChange={handleChange}>
            {options.map(({ id, name }) => {
              return (
                <MenuItem value={id} key={id}>
                  {name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectField;
