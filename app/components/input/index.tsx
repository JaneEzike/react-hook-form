import React from "react";
import { Form } from "react-bootstrap";
import { useController, UseControllerProps } from "react-hook-form";

interface IInput {
  labelText?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: "email" | "text" | "password" | "number";
  onChangeText?: any;

}

const CustomInput: React.FC<IInput> = ({
  labelText,
  placeholder,
  type,
  name,
  value,
  onChangeText,

}) => {
  return (
    
    <div className="flex flex-col">
      {labelText && <Form.Label className="py-2">{labelText} </Form.Label>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="border-4 h-[50px]"
        onChange={onChangeText}
      />
    </div>
  );
};

export default CustomInput;
