import React from "react";
import { DatePicker, Form } from "antd";
import moment from "moment";



interface FormDatePickerProps {
  label: string;
  name: string;
  defaultValue?: string;

}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  label,
  name,
  defaultValue,
  
}) => {
  const dateFormatList = ["DD/MM/YYYY"];
  return (
    
    <Form.Item
                label={label}
                name={name}
               
              >
                <DatePicker
                  defaultValue={moment("01/01/2000", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Form.Item>

  );
};

export default FormDatePicker;
