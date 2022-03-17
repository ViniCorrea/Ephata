import React from "react";
import {Form, Input, InputProps } from "antd";


type FormInputProps = InputProps& {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label=null,
  ...inputProps
  
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
    >
      <Input {...inputProps}/>
    </Form.Item>
  );
};

export default FormInput;
