"use client";
import React from "react";
import CustomInput from "@/app/components/input";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { useRouter } from "next/navigation";
import CustomRadioInput from "@/app/components/customRadioInput";
import { Button } from "react-bootstrap";

type FormValues = {
  name: string;
  email: string;
  username: string;
  gender: string;
  password: string;
  phone: {
    numbers: string;
    address: string;
  }[];
  // Addres: {
  //   add: string;
  // }[];
};
const SignUp = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      gender: "",
      password: "",
      phone: [{ numbers: "", address: "" }],
      // Addres: [{ add: "" }],
    },
  });
  const onSubmit = (value: any) => {
    alert("hello");
    console.log("value is", value);
    reset();
  };
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phone",
  });

  return (
    <div className=" h-screen w-[50%] mx-auto">
      <h3>eTranzact eCommerce</h3>
      <p>Create an account to list your own products</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                labelText="Full Name"
                type="text"
                onChangeText={onChange}
              />
            )}
          />
          <p className="text-red">{errors.name?.message}</p>
        </div>{" "}
        <div className="mt-2">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                labelText="Email Address"
                type="email"
                onChangeText={onChange}
              />
            )}
          />

          <p className="text-red">{errors.email?.message}</p>
        </div>
        <div className="flex justify-between items-center ">
          <div className="w-[60%]">
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  labelText="Username"
                  type="text"
                  onChangeText={onChange}
                  // value="name"
                />
              )}
            />
            <p className="text-red">{errors.username?.message}</p>
          </div>
          <div className="flex flex-col w-[35%] ">
            <label htmlFor="gender" className="py-2">
              Gender
            </label>
            <Controller
              name="gender"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <div className="flex gap-3">
                  <CustomRadioInput
                    Value="male"
                    text="male"
                    Name="male"
                    onChangeText={onChange}
                  />{" "}
                  <CustomRadioInput
                    Value="female"
                    text="female"
                    Name="female"
                    onChangeText={onChange}
                  />
                </div>
              )}
            />
            <p className="text-red">{errors.gender?.message}</p>
          </div>
        </div>
        <div className="mt-2">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                labelText="password"
                type="password"
                onChangeText={onChange}
              />
            )}
          />
          <p className="text-red">{errors.password?.message}</p>
        </div>
        <div className="mt-3">
          <label htmlFor="">Contact Info</label>
          <div className="border-[1px] border-black min-h-[100px]">
            <div>
              <div>
                {fields.map((item, index) => (
                  <li key={item.id}>
                    <div className="flex justify-between">
                      <div className="w-[47%]">
                        <Controller
                          control={control}
                          name="phone"
                          render={({ field: { onChange, onBlur, value } }) => (
                            <CustomInput
                              labelText="Phone Number"
                              type="number"
                              onChangeText={onChange}
                            />
                          )}
                        />
                      </div>{" "}
                      <div className="w-[47%]">
                        <Controller
                          control={control}
                          // name="phone.address"
                          name="phone"
                          render={({ field: { onChange, onBlur, value } }) => (
                            <CustomInput
                              labelText="Address"
                              type="text"
                              onChangeText={onChange}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      {index >= 1 && (
                        <button type="button" onClick={() => remove(index)}>
                          Delete
                        </button>
                      )}
                    </div>
                  </li>
                ))}

                <p className="text-red">{errors.email?.message}</p>
              </div>
            </div>
            <button
              type="button"
              className="float-right"
              onClick={() => append({ numbers: "", address: "" })}
            >
              Add
            </button>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
