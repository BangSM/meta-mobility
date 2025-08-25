"use client"

import { useRef, useState } from "react"

const Form = () => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const dataObj = Object.fromEntries(formData)
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    })
    const data = await res.json()
    alert(data.message)
    setLoading(false)
  }

  return (
    <form className="flex flex-col items-center  justify-center" onSubmit={handleSubmit} ref={ref}>
      <div className="flex flex-col gap-[28px] mb-10">
        <div className="flex gap-[23px]">
          <input
            name="companyName"
            type="text"
            placeholder="Company Name"
            className="w-[313px] bg-white rounded-[21px] border-[0.5] text-center placeholder:text-[#989898] border-white px-[22px] py-[17px] text-black"
          />
          <input
            name="yourName"
            type="text"
            placeholder="Your Name"
            className="w-[313px] bg-white rounded-[21px] border-[0.5] text-center placeholder:text-[#989898] border-white px-[22px] py-[17px] text-black"
          />
        </div>
        <div className="flex gap-[23px]">
          <input
            name="companyEmail"
            type="text"
            placeholder="Company E-mail"
            className="w-[313px] bg-white rounded-[21px] border-[0.5] text-center placeholder:text-[#989898] border-white px-[22px] py-[17px] text-black"
          />
          <input
            name="contractNumber"
            type="text"
            placeholder="Contract Number"
            className="w-[313px] bg-white rounded-[21px] border-[0.5] text-center placeholder:text-[#989898] border-white px-[22px] py-[17px] text-black"
          />
        </div>
        <div>
          <input
            name="message"
            type="text"
            placeholder="Contract Number"
            className="w-full h-[179px] bg-white rounded-[21px] border-[0.5] text-center placeholder:text-[#989898] border-white px-[22px] py-[17px] text-black"
          />
        </div>
      </div>
      <button
        className="flex justify-center btn_gradient_1 w-[107px] h-[36px] border rounded-[29px] text-white text-[10px] font-light leading-[20px] tracking-[-0.1px] px-[25px] items-center"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  )
}

export default Form
