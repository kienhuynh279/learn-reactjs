import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/forms-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

FormHook.propTypes = {
  onSubmit: PropTypes.func,
};

function FormHook(props) {
  const schema = yup
    .object({
      title: yup.string().required(),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log('handleSubmit', values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="TODO" form={form}></InputField>
    </form>
  );
}

export default FormHook;
