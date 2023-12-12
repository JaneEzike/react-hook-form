import React from "react";
interface CustomInputType {
  Value: string;
  text: string;
  Name: string;
  onChangeText?: any;
}
const CustomRadioInput = ({
  Value,
  text,
  Name,
  onChangeText,
}: CustomInputType) => {
  return (
    <div>
      <input type="radio" value={Value} name={Name} onChange={onChangeText} />
      <span>{text}</span>
    </div>
  );
};

export default CustomRadioInput;
