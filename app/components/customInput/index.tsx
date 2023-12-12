// import React from "react";
// import { Form } from "react-bootstrap";
// import { useController, UseControllerProps } from "react-hook-form";

// interface IInput {
//   control: any;
//   labelText?: string;
//   placeholder?: string;
//   type?: "email" | "text" | "password" | "number";
//   props: UseControllerProps;
// }

// const DefaultInput: React.FC<IInput> = ({
//   labelText,
//   placeholder,
//   type,
//   props,
// }) => {
//   const {
//     field: { onChange, value },
//     fieldState,
//     formState: { errors },
//   } = useController(props);

//   console.log({ errors });

//   return (
//     <div className="flex flex-col">
//       {labelText && <Form.Label className="py-2">{labelText} </Form.Label>}
//       <Form.Control
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         className="border-4 h-[50px]"
//         onChange={onChange}
//         {...props}
//       />
//     </div>
//   );
// };

// export default DefaultInput;
