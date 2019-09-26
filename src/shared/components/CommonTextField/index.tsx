import { FieldProps } from 'formik';
import * as React from 'react';
import { Input, InputProps } from 'react-native-elements';
import get from 'lodash/get';

type Props = FieldProps & InputProps;

export const CommonTextField: React.FC<Props> = React.memo((props) => {
  const {
    field: {onBlur, name, value},
    form,
    keyboardType,
    ...restProps
  } = props;

  const error = get(form.errors, name);

  const errorMessage = typeof error === 'string' ? error : '';

  return (
    <Input
      value={value && String(value)}
      onBlur={onBlur}
      keyboardType={keyboardType}
      errorMessage={errorMessage}
      {...restProps}
    />
  );
});