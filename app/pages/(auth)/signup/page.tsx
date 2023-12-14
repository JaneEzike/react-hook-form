"use client";
import React, { useEffect } from "react";
import CustomInput from "@/app/components/input";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { useRouter } from "next/navigation";
import CustomRadioInput from "@/app/components/customRadioInput";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { getCurrentDate } from "@/app/utils/helper";

type Phone = {
  numbers: string;
  address: string;
};
type FormValues = {
  name: string;
  email: string;
  username: string;
  gender: string;
  password: string;
  phone: Phone[];
  // Addres: {
  //   add: string;
  // }[];
};
const SignUp = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitted, isSubmitting },
    reset,
    watch,
    setValue,
    getValues,
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
  // setValue("username", "Jane");
  // console.log(watch("username"));
  // const uni = watch("username");

  // if (uni === "jhenna") {
  //   alert("hello");
  // }
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset]);
  const onSubmit = async (value: any) => {
    setTimeout(() => {
      alert("hello");
      console.log("value is", value);
    }, 3000);
  };
  const onError = () => {
    alert("error");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phone",
  });
  const time = getCurrentDate();
  // console.log("isSubmitting", isSubmitting);
  return (
    <div className=" h-screen w-[50%] mx-auto">
      <p>{time}</p>
      <Marquee speed={60}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      <h3>eTranzact eCommerce</h3>
      <p>Create an account to list your own products</p>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
                    Name="gender"
                    onChangeText={onChange}
                  />{" "}
                  <CustomRadioInput
                    Value="female"
                    text="female"
                    Name="gender"
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
                          name={`phone.${index}.numbers`}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <CustomInput
                              labelText="Phone Number"
                              type="number"
                              onChangeText={onChange}
                            />
                          )}
                        />
                        <p>{errors?.phone?.[index]?.numbers?.message}</p>
                      </div>{" "}
                      <div className="w-[47%]">
                        <Controller
                          control={control}
                          // name="phone.address"
                          name={`phone.${index}.address`}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <CustomInput
                              labelText="Address"
                              type="text"
                              onChangeText={onChange}
                            />
                          )}
                        />
                      </div>
                      <p>{errors?.phone?.[index]?.address?.message}</p>
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
        <button type="submit">{isSubmitting ? "submitting" : "submit"}</button>
      </form>
      <button
        onClick={() => {
          setValue("username", "J");
        }}
      >
        setvalue
      </button>
      <button
        onClick={() => {
          reset({
            ...getValues(),
            name: "bill",
            username: "gate",
            password: "2345A*bcvg3",
          });
        }}
      >
        reset
      </button>
    </div>
  );
};

export default SignUp;
