import { FieldProps } from 'formik';
import * as React from 'react';
import { Input, InputProps } from 'react-native-elements';

type Props = FieldProps & InputProps;

export const CommonTextField: React.FC<Props> = (
  {field: {onBlur, onChange, name, value}, ...restProps},
) => (
  <Input
    // value={value}
    {...restProps}
    // onBlur={onBlur}
  />
);


// import { TextField } from '@material-ui/core';
// import React from 'react';
// import { WrappedFieldProps } from 'redux-form';
//
// interface Props extends WrappedFieldProps {
//   label: string;
//   hinttext: string;
//   floatinglabeltext: string;
// }
//
// export const CommonTextField: React.FC<Props> = (
//   {input, label, meta: {touched, invalid, error}, ...custom},
// ) => (
//   <TextField
//     label={label}
//     hinttext={label}
//     floatinglabeltext={label}
//     error={touched && invalid}
//     helperText={touched && error}
//     {...input}
//     {...custom}
//     variant='outlined'
//     placeholder={label}
//     margin='normal'
//     fullWidth={true}
//   />
// );