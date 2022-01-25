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
    .object()
    .shape({
      title: yup.string().required('Please Enter Field !!!').min(5, 'Title is too short !!!'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form}></InputField>
    </form>
  );
}

export default FormHook;
