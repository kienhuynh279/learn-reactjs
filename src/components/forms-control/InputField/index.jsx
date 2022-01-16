import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <TextField
          value={value}
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched\
          label={label}
          disabled={disable}
          error
          helperText="Incorrect entry."
        />
      )}
    />
  );
}

export default InputField;
