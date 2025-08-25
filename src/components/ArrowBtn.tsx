"use client"
import Image from "next/image"

const ArrowBtn = () => {
  return (
    <button className="absolute right-[-100px] bottom-[52px] rounded-[50%] w-[44px] h-[44px] flex items-center justify-center">
      <Image
        src="/img_arrow_up.png"
        alt="icon_arrow_up"
        width={24}
        height={24}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </button>
  )
}

export default ArrowBtn
