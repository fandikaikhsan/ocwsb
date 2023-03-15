import React, { FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import yupResolver from "@hookform/resolvers/yup"
import * as yup from "yup"

type UserSubmitForm = {
  name: string
  company: string
  email: string
  phone: string
  password: string
  inquiry: string
}

const FormSection = () => {
  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    company: yup.string(),
    email: yup.string().email().required(),
    phone: yup.string(),
    password: yup.string().required().min(6),
    inquiry: yup.string(),
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
      <div className=" p-8 bg-gradient-to-b from-gray-900 to-orange-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className={`block text-2xl font-maqin mb-2 ${
                errors.name ? "text-red-400" : "text-white"
              }`}
            >
              Name:
            </label>
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              placeholder="Please enter your name"
              className={`block w-full  bg-white rounded-lg border-2 py-2 px-4  placeholder-gray-400  ${
                errors.name
                  ? "text-red-300 border-red-400"
                  : "text-black border-gray-400"
              }`}
              // ref={register}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                A valid name is required.
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="company"
              className={`block text-2xl font-maqin mb-2 ${
                errors.company ? "text-red-400" : "text-white"
              }`}
            >
              Company:
            </label>
            <input
              {...register("company")}
              type="text"
              name="company"
              id="company"
              placeholder="Please enter your company"
              className={`block w-full  bg-white rounded-lg border-2 py-2 px-4  placeholder-gray-400  ${
                errors.company
                  ? "text-red-300 border-red-400"
                  : "text-black border-gray-400"
              }`}
              // ref={register}
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-2">
                A valid company is required.
              </p>
            )}
          </div>

          <div className="mb-5">
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
                  : "text-black border-gray-400"
              }`}
              // ref={register}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                A valid email is required.
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className={`block text-2xl font-maqin mb-2 ${
                errors.email ? "text-red-400" : "text-white"
              }`}
            >
              Phone:
            </label>
            <input
              {...register("phone")}
              type="text"
              name="phone"
              id="phone"
              placeholder="Please enter your phone"
              className={`block w-full  bg-white rounded-lg border-2 py-2 px-4  placeholder-gray-400  ${
                errors.phone
                  ? "text-red-300 border-red-400"
                  : "text-black border-gray-400"
              }`}
              // ref={register}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">
                A valid phone is required.
              </p>
            )}
          </div>

          <div className="mb-8">
            <label
              htmlFor="inquiry"
              className={`block text-2xl font-maqin mb-2 ${
                errors.inquiry ? "text-red-400" : "text-white"
              }`}
            >
              Inquiry:
            </label>
            <input
              {...register("inquiry")}
              type="text"
              name="inquiry"
              id="inquiry"
              placeholder="Please enter your inquiry"
              className={`block w-full resize-y bg-white rounded-lg border-2 py-2 h-48 px-4 text-black placeholder-gray-400 ${
                errors.inquiry ? "border-red-400" : "text-black"
              }`}
              // ref={register()}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                Your password is required.
              </p>
            )}
          </div>
          <button className="bg-transparent hover:bg-orange-700 border-white border-2 text-white rounded-lg shadow py-2 px-10 text-sm">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default FormSection
