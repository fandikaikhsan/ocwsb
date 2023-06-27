"use client"

import React, { FC, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import yupResolver from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"

type UserSubmitForm = {
  name: string
  company: string
  email: string
  phone: string
  password: string
  message: string
}

const DesktopFormSection = () => {
  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    company: yup.string(),
    email: yup.string().email().required(),
    phone: yup.string(),
    password: yup.string().required().min(6),
    message: yup.string(),
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

  const [captchaValue, setCaptchaValue] = useState<string | null>(null)

  const onCaptchaChange = (value: string | null) => {
    // You can use the value for server-side validation later.
    setCaptchaValue(value)
  }

  const onSubmit: SubmitHandler<UserSubmitForm> = async (data: any) => {
    if (!captchaValue) {
      // Display an error message if the reCAPTCHA is not valid
      alert("Please complete the reCAPTCHA before submitting the form.")
      return
    }
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/inquiry`, data)
      alert("Inquiry submitted successfully")
    } catch (error) {
      alert("Error submitting inquiry")
    }
  }

  return (
    <>
      <div className=" p-8 bg-gradient-to-b w-full from-black to-red-800">
        <div className="md:w-4/6 lg:w-[40rem] ml-auto mr-24">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5 flex flex-row justify-between content-between">
              <label
                htmlFor="name"
                className={`block text-2xl font-maqin mb-2 ${
                  errors.name ? "text-red-400" : "text-white"
                }`}
              >
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                id="name"
                placeholder="Please enter your name"
                className={` w-2/3  bg-white rounded-lg border-2 py-2 px-5  placeholder-gray-400  ${
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

            <div className="mb-5 flex flex-row justify-between content-between">
              <label
                htmlFor="company"
                className={`block text-2xl font-maqin mb-2 ${
                  errors.company ? "text-red-400" : "text-white"
                }`}
              >
                Company
              </label>
              <input
                {...register("company")}
                type="text"
                name="company"
                id="company"
                placeholder="Please enter your company"
                className={`w-2/3 block  bg-white rounded-lg border-2 py-2 px-4  placeholder-gray-400  ${
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

            <div className="mb-5 flex flex-row justify-between content-between">
              <label
                htmlFor="email"
                className={`block text-2xl font-maqin mb-2 ${
                  errors.email ? "text-red-400" : "text-white"
                }`}
              >
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                name="email"
                id="email"
                placeholder="Please enter your email"
                className={`block w-2/3  bg-white rounded-lg border-2 py-2 px-4  placeholder-gray-400  ${
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

            <div className="mb-5 flex flex-row justify-between content-between">
              <label
                htmlFor="phone"
                className={`block text-2xl font-maqin mb-2 ${
                  errors.email ? "text-red-400" : "text-white"
                }`}
              >
                Phone
              </label>
              <input
                {...register("phone")}
                type="text"
                name="phone"
                id="phone"
                placeholder="Please enter your phone"
                className={`block w-2/3  bg-white rounded-lg border-2 py-2 px-4  placeholder-gray-400  ${
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

            <div className="mb-8 flex flex-row justify-between content-between">
              <label
                htmlFor="message"
                className={`block text-2xl font-maqin mb-2 ${
                  errors.message ? "text-red-400" : "text-white"
                }`}
              >
                Inquiry
              </label>
              <input
                {...register("message")}
                type="text"
                name="message"
                id="message"
                placeholder="Please enter your inquiry"
                className={`block w-2/3 resize-y bg-white rounded-lg border-2 py-2 h-36 px-4 text-black placeholder-gray-400 ${
                  errors.message ? "border-red-400" : "text-black"
                }`}
                // ref={register()}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-2">
                  Your message is required.
                </p>
              )}
            </div>
            {/* Add the reCAPTCHA component */}
            <div className="flex justify-end mt-4 mb-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                onChange={onCaptchaChange}
              />
            </div>
            <div className="flex justify-end mt-4 mb-4">
              <button
                className={`bg-transparent ${
                  !captchaValue
                    ? "disabled hover:bg-gray-600"
                    : "hover:bg-orange-700"
                }  border-white border-2 text-white rounded-lg items-end shadow py-2 px-10 text-sm`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DesktopFormSection
