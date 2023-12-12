"use client";
import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
  genderOptions: GenderEnum;
}

const genderOptions = [
  { label: "male", value: "male" },
  { label: "female", value: "female" },
  { label: "other", value: "other" },
];

const Page = () => {
  const [genders, setGender] = useState("Enter your gender");

  const handleGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register("firstName", { required: true, minLength: 5 })}
        
      />{" "}
      <br />
      <label>Gender</label>
      <select {...register("gender", { required: true })}>
        <option>female</option>
        <option>male</option>
        <option>other</option>
      </select>{" "}
      <br />
      {genders} <br />
      <select
        {...register("genderOptions", { required: true })}
        onChange={handleGender}
      >
        <option value="⬇️ Select a fruit ⬇️"> -- Select a fruit -- </option>
        {genderOptions.map((item) => (
          <>
            <option value={item.value}>{item.label}</option>
          </>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
};

export default Page;
