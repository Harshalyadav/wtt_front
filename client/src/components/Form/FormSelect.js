import React from 'react';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import FormErrorMessage from './FormErrorMessage';

export default function FormSelect({
  children, name, label, rules, ...restProps
}) {
  return (
    <>
      <FormControl
        variant="standard"
        fullWidth
      >
        <InputLabel id="state">{label}</InputLabel>
        <Controller
          name={name}
          rules={rules}
          render={({ field }) => (
            <Select
              {...field}
              variant="standard"
              {...restProps}
            >
              {children}
            </Select>
          )}
        />
      </FormControl>
      <FormErrorMessage name={name} label={label} />
    </>
  );
}
