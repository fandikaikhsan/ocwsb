import React, { FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import yupResolver from "@hookform/resolvers/yup"
import * as yup from "yup"

type UserSubmitForm = {
  email: string
  password: string
}

const FormSection = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: "onBlur",
    // resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<UserSubmitForm> = (data: any) =>
    console.log(data)

  const handleSubmitData = (data: any) => {
    // handle submitting the form
    console.log(data)
  }

  return (
    <>
      <div className=" p-10 bg-gradient-to-b from-gray-700 to-orange-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <label
              htmlFor="email"
              className={`block text-2xl font-maqin mb-2 ${
                errors.email ? "text-red-400" : "text-white"
              }`}
            >
              Email:
            </label>
            <input
              {...register("email")}
              type="text"
              name="email"
              id="email"
              placeholder="Please enter your email"
              className={`block w-full  bg-white rounded-lg border-2 py-2 px-4  placeholder-gray-400  ${
                errors.email
                  ? "text-red-300 border-red-400"
                  : "text-gray-200 border-gray-400"
              }`}
              // ref={register}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                A valid email is required.
              </p>
            )}
          </div>

          <div className="mb-8">
            <label
              htmlFor="password"
              className={`block text-2xl font-maqin mb-2 ${
                errors.password ? "text-red-400" : "text-white"
              }`}
            >
              Password:
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Please enter your password"
              className={`block w-full bg-white rounded-lg border-2 py-2 px-4 text-black placeholder-gray-400 ${
                errors.password ? "border-red-400" : "text-gray-400"
              }`}
              // ref={register()}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                Your password is required.
              </p>
            )}
          </div>

          <button className="bg-transparent border-white border-2 text-white rounded shadow py-2 px-5 text-sm">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default FormSection
