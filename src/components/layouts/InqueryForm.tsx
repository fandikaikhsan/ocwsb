import { useState } from "react"
import { useForm } from "react-hook-form"
import { HiOutlineRefresh } from "react-icons/hi"
import ReCAPTCHA from "react-google-recaptcha"

interface FormData {
  name: string
  email: string
  message: string
  captcha: string
}

const InquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Your submission logic goes here
  }

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-orange-700 space-y-4">
      <div className="flex space-x-20">
        <label htmlFor="name" className="block font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="block w-full rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
        />
        {errors.name && (
          <span className="text-red-500">Please enter your name</span>
        )}
      </div>
      <div className="flex space-x-20">
        <label htmlFor="email" className="block font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
        />
        {errors.email && (
          <span className="text-red-500">Please enter a valid email</span>
        )}
      </div>
      <div className="flex space-x-20">
        <label htmlFor="message" className="block font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className="block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
        />
        {errors.message && (
          <span className="text-red-500">Please enter a message</span>
        )}
      </div>
      <div>
        <ReCAPTCHA
          sitekey="6LfyO_4kAAAAALkg-jSRULbYAZDuHlAO8D5CvDA9"
          onChange={handleCaptchaChange}
          className="my-4"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            captchaToken ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!captchaToken}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            // Reset the captcha
            setCaptchaToken(null)
          }}
          className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <HiOutlineRefresh className="h-5 w-5 mr-1" />
          Reset
        </button>
      </div>
    </form>
  )
}

export default InquiryForm
