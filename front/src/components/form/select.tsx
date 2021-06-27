import React from "react";
import { Select, Form } from "antd";

type OptionsProps = {
  label: string;
  value: string;
};

interface FormSelectProps {
  label: string;
  name: string;
  defaultValue?: string;
  options: OptionsProps[];
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  defaultValue,
  options,
}) => {
  const { Option } = Select;

  return (
    <Form.Item
      label={label}
      name={name}
    >
      <Select defaultValue={defaultValue}>
        {options.map((option) => (
          <Option value={option.value}>{option.label}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default FormSelect;
