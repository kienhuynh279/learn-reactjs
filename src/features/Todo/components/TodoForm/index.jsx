import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    //prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      name: value,
      status: "new",
    };
    onSubmit(formValues);

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

export default TodoForm;
